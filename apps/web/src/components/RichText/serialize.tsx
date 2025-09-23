import type { JSX } from 'react';
import React, { Fragment } from 'react';

import type { DefaultNodeTypes } from '@monorepo/cms/node_modules/@payloadcms/richtext-lexical';

import { CMSLink } from '../CMSLink';
import type { TextProps, TextType } from '../Text';
import { Text } from '../Text';
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat';

export type NodeTypes = DefaultNodeTypes;

type Props = {
  nodes: NodeTypes[];
  textType?: TextType;
  textColor?: TextProps['color'];
};

export function serializeLexical({ nodes, textColor, textType = 'p1' }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          return null;
        }

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>;

          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false;
                  }
                }
              }
            }

            return serializeLexical({ nodes: node.children as NodeTypes[], textColor, textType });
          }
        };

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : '';

        switch (node.type) {
          case 'linebreak': {
            return <br className='col-start-2' key={index} />;
          }

          case 'paragraph': {
            return (
              <Text key={index} tag='p' type={textType} color={textColor}>
                {serializedChildren}
              </Text>
            );
          }

          case 'heading': {
            const tag = node?.tag;

            return (
              <Text
                tag={tag}
                type={tag as TextType}
                color={textColor}
                className='col-start-2'
                key={index}
              >
                {serializedChildren}
              </Text>
            );
          }
          case 'list': {
            const Tag = node?.tag;

            return <Tag key={index}>{serializedChildren}</Tag>;
          }
          case 'listitem': {
            if (node?.checked != null) {
              return (
                <li
                  aria-checked={node.checked ? 'true' : 'false'}
                  className={` ${node.checked ? '' : ''}`}
                  key={index}
                  role='checkbox'
                  tabIndex={-1}
                  value={node?.value}
                >
                  <Text tag='p' type='h3'>
                    {serializedChildren}
                  </Text>
                </li>
              );
            } else {
              return (
                <li key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              );
            }
          }
          case 'quote': {
            return (
              <Text type='p2' key={index} color={textColor}>
                {serializedChildren}
              </Text>
            );
          }
          case 'link': {
            const fields = node.fields;

            const linkTypes = fields.linkType === 'internal' ? 'reference' : 'custom';

            return (
              <CMSLink key={index} {...fields} type={linkTypes} reference={fields.doc as any}>
                {serializedChildren}
              </CMSLink>
            );
          }

          default:
            return null;
        }
      })}
    </Fragment>
  );
}
