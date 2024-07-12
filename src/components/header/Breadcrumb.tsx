'use client'
import { usePathname } from 'next/navigation'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import Link from 'next/link'

export default function Breadcrumb() {
  const urlName = usePathname()
  const urlNameFilter = urlName.split('/').filter(Boolean)

  return (
    <BreadcrumbList className="hidden md:flex">
      {urlNameFilter.map((breadCrumb, index) => {
        const href = `/${urlNameFilter.slice(0, index + 1).join('/')}`
        const last = index === urlNameFilter.length - 1

        return (
          <BreadcrumbItem key={index}>
            {!last ? (
              <>
                <BreadcrumbLink asChild>
                  <Link href={href}>{breadCrumb}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{breadCrumb}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        )
      })}
    </BreadcrumbList>
  )
}
