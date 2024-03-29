import React from 'react';
import { Photo } from '../../models/Photo';
import i18n from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import {
  CardContainer,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoImage,
  PhotoLink,
} from './styles';

type Props = {
  photo: Photo;
};

const PhotoCard = ({ photo }: Props) => {
  const { t } = useTranslation();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <PhotoLink to='/view' state={{ photo }}>
      <CardContainer>
        <PhotoImage src={photo.smallUrl} alt={photo.description} />

        <InfoPanel>
          {photo.description && (
            <PhotoDescription>
              {photo.description.length > 50
                ? `${photo.description.slice(0, 50)}(...)`
                : photo.description}
            </PhotoDescription>
          )}
          <PhotoCreationDate>
            {t('content.create')} {formatDate(photo.creationDate)}
          </PhotoCreationDate>
        </InfoPanel>
      </CardContainer>
    </PhotoLink>
  );
};

export default PhotoCard;

