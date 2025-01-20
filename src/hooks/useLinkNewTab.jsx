import { useEffect, useRef } from 'react'

export default function useLinkNewTab() {
  // add Attribute('target', '_blank') in tag a
  const contentRef = useRef(null)
  useEffect(() => {
    console.log(contentRef.current)
    if (contentRef) {
      const links = contentRef.current?.querySelectorAll('a')
      links?.length > 0 && links.forEach((item) => item.setAttribute('target', '_blank'))
    }
  }, [])

  return { contentRef }
}
