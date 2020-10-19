import IFormatDateProvider from '../models/IFormatDateProvider';

export default class FormatDateProvider implements IFormatDateProvider {
  public formatDate(specificDateFormat: string): string {
    const [year, month, day] = specificDateFormat.split('-');

    return `${day}/${month}/${year}`;
  }
}
