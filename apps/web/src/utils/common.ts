import headerStyles from '@/views/Header/Header.module.scss';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0');

  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
}

export function formatDateString(date: string, locale: string): string {
  const inputDate: Date = new Date(date);

  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };

  return inputDate.toLocaleDateString(locale, options);
}

export function scrollToAnchor(anchorId: string, headerHeight: number = 0): void {
  const anchorElement = document.getElementById(anchorId);

  const header = document.querySelector<HTMLElement>(`.${headerStyles.wrapper}`);

  if (anchorElement) {
    const offset =
      anchorElement.getBoundingClientRect().top +
      window.scrollY -
      (header?.offsetHeight ?? headerHeight);

    window.scrollTo({ behavior: 'smooth', top: offset });
  } else {
    console.error(`Anchor element with id '${anchorId}' not found.`);
  }
}

export const parseCoordinatesString = (coordinates: string) => {
  const [latitude, longitude] = coordinates.split(', ');

  const lat = parseFloat(latitude);

  const lng = parseFloat(longitude);

  return { lat, lng };
};

export function beautifyNumber(x: number | string) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
}

export const gMapKey = 'AIzaSyD2DtfFd5gGfXBLDIefuin3wL_y-IhEWo4';

export const replaceVars = ({
  string,
  vars,
}: {
  string: string;
  vars: {
    [key: string]: unknown;
  };
}) => {
  const parts = string.split(/(\{\{.*?\}\})/);

  return parts
    .map((part) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const placeholder = part.substring(2, part.length - 2).trim();

        const value = vars[placeholder];

        return value !== undefined && value !== null ? value : part;
      } else {
        return part;
      }
    })
    .join('');
};

export function convertMsToMin(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `${minutes}:${formattedSeconds} min`;
}

export function isYouTubeOrVimeoLink(url: string): boolean {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

  const vimeoRegex = /^(https?:\/\/)?(www\.)?(vimeo\.com)\/.+$/;

  return youtubeRegex.test(url) || vimeoRegex.test(url);
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = Math.floor(seconds % 60);

  // Додаємо провідний нуль для секунд, якщо менше 10
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${formattedSeconds}`;
}

export const mapLocale = (locale: string) => {
  if (locale === 'ua') return 'uk';

  return locale;
};
