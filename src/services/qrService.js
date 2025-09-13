import QRCode from 'qrcode.react';

export const generateQRCode = (data) => {
  return <QRCode value={JSON.stringify(data)} />;
};