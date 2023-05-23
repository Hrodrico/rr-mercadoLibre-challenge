export function formatNumberToMoney(num: any, _currency: string): string {
  let result: string = '0';
  let country: string = 'es-CL';
  if (_currency.length > 0) {
    switch (_currency) {
      case 'CLP':
        country = 'es-CL';
        break;
      case 'EUR':
        country = 'de-DE';
        break;
      case 'JPY':
        country = 'ja-JP';
        break;
      case 'ARS':
        country = 'es-AR';
        break;
      default:
        country = 'es-CL';
    }
  } else {
    _currency = 'CLP';
  }

  if (num !== undefined) result = new Intl.NumberFormat(country, {currency: _currency, style: 'currency'}).format(num);
  return result;
}
