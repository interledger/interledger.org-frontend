import { TableResponsive } from '@components/layout/TableResponsive/TableResponsive';
import { Table } from '@components/ui/Table/Table';
import { Text } from '@components/ui/Text/Text';
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import Link from 'next/link';
import React from 'react';

export interface RichTextProps {
  html: string;
}

export const RichText = ({ html }: RichTextProps) => {
  const index = React.useRef(0);
  const render = React.useCallback(
    <N extends keyof JSX.IntrinsicElements>(
      name: N,
      domNode: Element,
      children: React.ReactNode
    ) => {
      index.current = index.current + 1;

      if (!name) {
        return (
          <React.Fragment key={`${index.current}-${children}`}>
            {children}
          </React.Fragment>
        );
      }

      switch (name) {
        case 'p':
          return (
            <Text key={`body1-${index.current}`} variant="body1">
              {children}
            </Text>
          );
        case 'h1':
          return (
            <Text key={`h1-${index.current}`} variant="h1">
              {children}
            </Text>
          );
        case 'h2':
          return (
            <Text key={`h2-${index.current}`} variant="h2">
              {children}
            </Text>
          );
        case 'h3':
          return (
            <Text key={`h3-${index.current}`} variant="h3">
              {children}
            </Text>
          );
        case 'h4':
          return (
            <Text key={`h4-${index.current}`} variant="h4">
              {children}
            </Text>
          );
        case 'h5':
          return (
            <Text key={`h5-${index.current}`} variant="h5">
              {children}
            </Text>
          );
        case 'h6':
          return (
            <Text key={`h6-${index.current}`} variant="h6">
              {children}
            </Text>
          );
        case 'a':
          const externalLink = !domNode.attribs.href.startsWith('/');
          return (
            <Link
              key={`a-${index.current}`}
              href={domNode.attribs.href}
              target={externalLink ? '_blank' : undefined}
              rel={externalLink ? 'noreferrer' : undefined}
              {...domNode.attribs}
            >
              <>{children}</>
            </Link>
          );
        case 'strong':
          return <strong key={`strong-${index.current}`}>{children}</strong>;
        case 'em':
          return <em key={`em-${index.current}`}>{children}</em>;
        case 'pre':
          return <pre key={`pre-${index.current}`}>{children}</pre>;
        case 'code':
          return <code key={`code-${index.current}`}>{children}</code>;
        case 'span':
          return <span key={`span-${index.current}`}>{children}</span>;
        case 'table':
          return (
            <TableResponsive key={`table-${index.current}`}>
              <Table>{children}</Table>
            </TableResponsive>
          );
        case 'tr':
          return <tr key={`tr-${index.current}`}>{children}</tr>;
        case 'td':
          return <td key={`td-${index.current}`}>{children}</td>;
        case 'th':
          return <th key={`th-${index.current}`}>{children}</th>;
        case 'tbody':
          return <tbody key={`tbody-${index.current}`}>{children}</tbody>;
        case 'thead':
          return <thead key={`thead-${index.current}`}>{children}</thead>;
        default:
          return null;
      }
    },
    [index]
  );

  const replace = React.useCallback(
    (domNode: any) => {
      const node = domNode;
      let children: React.ReactNode = null;
      const name = node.name as keyof JSX.IntrinsicElements;
      switch (node.type) {
        case 'text':
          children = node.data;
          break;
        case 'tag':
          children = node.children?.map((childNode: any) => replace(childNode));
          break;
        default:
          break;
      }

      return render(name, node, children);
    },
    [render]
  );

  const options: HTMLReactParserOptions = {
    replace,
  };

  return <>{parse(html, options)}</>;
};
