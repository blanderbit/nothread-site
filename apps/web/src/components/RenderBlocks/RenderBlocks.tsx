import type { FC } from 'react';

type Props = {
   
  blocks: ({ blockType: string; id?: null | string } & Record<string, any>)[];
   
  mapper: Record<string, FC<any>>;
};

export const RenderBlocks = ({ blocks, mapper }: Props) => {
  return (
    <>
      {blocks.map((block) => {
        const BlockComponent = mapper[block.blockType];

        if (!BlockComponent) return null;

        return <BlockComponent key={block.id} {...block} />;
      })}
    </>
  );
};
