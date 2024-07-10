// components/Breadcrumb.tsx

import {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

import Link from 'next/link' // Importar o Link do next/link

type BreadcrumbProps = {
  hrefs: string[]
  labels: string[]
}

export default function Breadcrumb({ hrefs, labels }: BreadcrumbProps) {
  return (
    <BreadcrumbEllipsis className="hidden md:flex">
      <BreadcrumbList>
        {hrefs.map((href, index) => (
          <BreadcrumbItem key={index}>
            {index < hrefs.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link href={href}>
                    <a>{labels[index]}</a>
                  </Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{labels[index]}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbEllipsis>
  )
}
