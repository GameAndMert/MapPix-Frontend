import { useTranslation } from 'next-i18next';

export default function ModalInfos() {
  const { t } = useTranslation('infos');

  return (
    <>
      {t('text')}<br/>
      <hr/>
      {t('madeBy')}<br/>
      {t('os')} <a href="github.com/GameAndMert/MapPix-Fronted/">Frontend</a> & <a href="github.com/GameAndMert/MapPix-Bacckend/">Backend</a><br/>
      {t('discord')} <a href="https://discord.gg/Cc7xbspRBH">Discord</a>
    </>
  );
}