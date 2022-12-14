import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../shared/lang/i18next';
import styled from 'styled-components';
import PinnedSubheaderList, { ISubHeaderProps } from '../shared/components/PinnedSubheaderList';

const AlignEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function Homepage() {
  const { t } = useTranslation('translation', { i18n: i18next });
  const subHeaders : ISubHeaderProps[] = [
    {
      title: t('homepage.subheader1.title'),
      subList: [
        t('homepage.subheader1.sublist1'),
        t('homepage.subheader1.sublist2'),
        t('homepage.subheader1.sublist3')
      ]
    },
    {
      title: t('homepage.subheader2.title'),
      subList: [
        t('homepage.subheader2.sublist1'),
        t('homepage.subheader2.sublist2'),
        t('homepage.subheader2.sublist3')
      ]
    }
  ];
  return <>
    <PinnedSubheaderList subHeaders={subHeaders}/>
  </>;
}
