// Import packages
import { Marked } from '@ts-stack/markdown';
import parse from 'html-react-parser';

export const parseTable = (table: string): string => {
  Marked.setOptions({ tables: true });
  const html: any = parse(Marked.parse(table!).replace(/>\s/g, '>'));

  return html;
};

export const addCellClasses = (): void => {
  setTimeout(() => {
    const headTr: NodeListOf<HTMLTableHeaderCellElement> | undefined = document.querySelectorAll('.dmp__table thead tr');
    const bodyTr: NodeListOf<HTMLTableHeaderCellElement> | undefined = document.querySelectorAll('.dmp__table tbody tr');

    for (let i = 0; i < headTr!.length; i++) {
      const headTh = headTr[i].querySelectorAll('th');

      for (let i = 0; i < headTh!.length; i++) {
        headTh![i].classList.add('dmp__table-th');
        headTh![i].classList.add(`dmp__table-th-${i + 1}`);
      }
    }

    for (let i = 0; i < bodyTr!.length; i++) {
      const bodyTd = bodyTr[i].querySelectorAll('td');

      for (let i = 0; i < bodyTd!.length; i++) {
        bodyTd![i].classList.add('dmp__table-td');
        bodyTd![i].classList.add(`dmp__table-td-${i + 1}`);
      }
    }
  });
};
