import { newMultimedia, newContainer, newText } from '../helpers/helpers';

const infographicSectionCan = (data) => {
  const infographicPercent = newText('h2', data.percent || '', [
    'display',
    'display-1',
    'infographic-container__percent',
  ]);
  const infographicTitle = newText('h2', data.title, [
    'heading',
    'heading-2',
    'infographic-container__title-can',
  ]);
  const infographicTitleDesktop = newText('h2', data.title, [
    'heading',
    'heading-2',
    'infographic-container__title-desktop',
  ]);
  const infographicText = newText('p', data.text || '', [
    'text',
    'text-normal',
    'infographic-container__text',
  ]);
  const infographicTextDesktop = newText('p', data.text || '', [
    'text',
    'text-normal',
    'infographic-container__text-desktop',
  ]);

  const infographicContinerText = newContainer(
    'div',
    [infographicTitleDesktop, infographicTextDesktop],
    ['infographic-container__container-text-desktop'],
  );
  const infographicImage = newMultimedia('img', data.image.src, data.image.alt, [
    'infographic-container__image-can',
  ]);

  const section = newContainer(
    'section',
    [
      infographicPercent,
      infographicTitle,
      infographicText,
      infographicImage,
      infographicContinerText,
    ],
    ['grid', 'infographic-container'],
  );

  return section;
};

export { infographicSectionCan };
