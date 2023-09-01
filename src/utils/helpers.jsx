export default function scrollToSection (sectionClass, align) {
  const section = document.getElementsByClassName(sectionClass);
  if (section) {
    section[0].scrollIntoView({
      behavior: 'smooth',
      block: align,
      inline: align, 
    });
  }
}

export function scrollToId (id, align) {
  const section = document.getElementById(id);
  console.log('section >>>>', section)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: align,
      inline: align, 
    });
  }
}

export function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
