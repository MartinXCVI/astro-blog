const navLinks = document.querySelectorAll("[data-navLink]")

navLinks.forEach((navLink)=> {
  navLink.getAttribute("href") === window.location.pathname
  ? navLink.setAttribute("aria-current", "page")
  : ''
})