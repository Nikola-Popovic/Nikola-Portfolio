import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';
import styled from 'styled-components';
import PinnedSubheaderList, { ISubHeaderProps } from '../shared/components/PinnedSubheaderList';

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export function Projects() {
  const { t } = useTranslation('translation', { i18n: i18next });
  const subHeaders : ISubHeaderProps[] = [
    {
      title: t('projects.subheader1.title'),
      subList: [
        t('projects.subheader1.subitem1'),
        t('projects.subheader1.subitem2'),
        t('projects.subheader1.subitem3')
      ]
    },
    {
      title: t('projects.subheader2.title'),
      subList: [
        t('projects.subheader2.subitem1'),
        t('projects.subheader2.subitem2'),
        t('projects.subheader2.subitem3')
      ]
    }
  ];
  return <AlignCenter>
    <PinnedSubheaderList subHeaders={subHeaders}/>
  </AlignCenter>;
}
