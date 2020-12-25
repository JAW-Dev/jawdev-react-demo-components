// Import packages
import { Marked, Renderer } from '@ts-stack/markdown';
import parse from 'html-react-parser';

declare type Align = 'center' | 'left' | 'right';

class RerenderTableCell extends Renderer {
  table(header: string, body: string): string {
    return `
<table>
<thead>
${header}</thead>
<tbody>
${body}</tbody>
</table>
`;
  }

  tablecell(content: string, flags: { header?: boolean; align?: Align }): string {
    const type = flags.header ? 'th' : 'td';
    const alignTag = `<${type} style="text-align:${flags.align}">`;
    const baseTag = `<${type}>`;
    const tag = flags.align ? alignTag : baseTag;
    const newTag = `${tag}${content}</$type>\n`;
    return newTag;
  }
}

export const parseTable = (table: string): string => {
  Marked.setOptions(
    {
      tables: true,
      renderer: new RerenderTableCell()
    }
  );
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
