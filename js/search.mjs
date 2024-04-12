// PLACEHOLDER
const websiteContent = [
  {
    title: "Events",
    description: "Upcoming events",
    tags: [
      "mmf annual charity concert",
      "run for music 5k charity race",
      "mmf culture and arts festival",
      "back-to-school fundraiser gala",
      "holiday giving campaign kickoff",
      "may",
      "june",
      "july",
      "august",
      "november",
    ],
    href: "/index.html#events",
    thumbnail: "", // image href
    alt: "img",
  },
  {
    title: "History",
    description: "The MMF's journey",
    tags: [
      "Foundation",
      "burning passion",
      "local community",
      "free music lessons to children",
    ],
    href: "/index.html#history",
    thumbnail: "", // image href
    alt: "img",
  },
  {
    title: "News",
    description: "Latest news about MMF",
    tags: [
      "charity",
      "happening",
      "upcoming",
      "donation",
      "donate",
      "support",
      "children",
    ],
    href: "/pages/news.html",
    thumbnail: "", // image href
    alt: "img",
  },
  {
    title: "About us",
    description: "MMF introduction",
    tags: [
      "Mozika Manova Fiainana",
      "school",
      "music",
      "children",
      "provide",
      "provition",
      "underprivileged",
      "food",
      "scarcity",
      "learning",
      "clothing",
      "charity",
      "work",
      "education",
      "staff",
      "teachers",
      "community",
      "st. johannes menighet stavanger",
      "foreningen musikk gir liv kristiansand",
      "buffet crampon paris",
    ],
    href: "/pages/about-page.html",
    thumbnail: "", // image href
    alt: "img",
  },
  {
    title: "Eline Rodtvelt Hansen",
    description: "Violinist and teacher",
    tags: [
      "antsirabe",
      "dina",
      "sandnes",
      "grieg academy",
      "norwegian board mmf",
    ],
    href: "/pages/about-page.html#eline",
    thumbnail: "", // image href
    alt: "img",
  },
]
// ---------------------------------------------

const openSearchDrawerBtn = document.querySelector("button#openSearchBarDrawer")
const closeSearchDrawerBtn = document.querySelector(
  "button#closeSearchBarDrawer"
)
const searchDrawer = document.querySelector("div#search-drawer-from-header")
const searchInput = document.querySelector("input#Search-Drawer")
const submitSearchBtn = document.querySelector("button.search-drawer_submit")
const searchResultsContainer = document.querySelector("div#search-results")

// Makes sure the user cannot tab to the hidden search field
searchInput.setAttribute("tabindex", "-1")
submitSearchBtn.setAttribute("tabindex", "-1")
closeSearchDrawerBtn.setAttribute("tabindex", "-1")
searchDrawer.setAttribute("aria-expanded", "false")

// QoL - Close drawer if user clicks outside search drawer
function handleClickedOutsideSearchField(e) {
  const isClickedInsideDrawer = searchDrawer.contains(e.target)
  if (!isClickedInsideDrawer) closeSearch()
}

function openSearch(e) {
  e.stopPropagation() // Stops the event from bubbling up to the document event listener which will fire the closeSearch function (manual loop)

  // ARIA-attributes
  searchInput.removeAttribute("tabindex") // Remove tabindex -1
  submitSearchBtn.removeAttribute("tabindex") // Remove tabindex -1
  closeSearchDrawerBtn.removeAttribute("tabindex") // Remove tabindex -1
  searchDrawer.setAttribute("aria-expanded", "true")
  // -----

  searchDrawer.classList.replace("-translate-y-full", "translate-y-0") // Opens the drawer
  searchInput.focus() // Auto-focus the search field

  // Events
  openSearchDrawerBtn.removeEventListener("click", openSearch) // Remove the open drawer EL (event listener)
  closeSearchDrawerBtn.addEventListener("click", closeSearch) // Add close drawer EL to close-btn
  openSearchDrawerBtn.addEventListener("click", closeSearch) // Add close drawer EL to search-btn
  document.addEventListener("click", handleClickedOutsideSearchField) // EL for if the user clicks outside the search drawer - Closes the drawer
  searchInput.addEventListener("keyup", handleSearch) // EL to handle search input
  // -----
}

function closeSearch() {
  // ARIA-attributes
  // Makes sure the user cannot tab to the hidden search field
  searchInput.setAttribute("tabindex", "-1")
  submitSearchBtn.setAttribute("tabindex", "-1")
  closeSearchDrawerBtn.setAttribute("tabindex", "-1")
  searchDrawer.setAttribute("aria-expanded", "false")
  //-----

  searchDrawer.classList.replace("translate-y-0", "-translate-y-full") // Retracts the drawer
  if (searchResultsContainer) searchResultsContainer.setAttribute("hidden", "true") // !Placeholder container for search results - delete me - here and in index.html
  searchInput.value = ""

  // Events
  closeSearchDrawerBtn.removeEventListener("click", closeSearch)
  openSearchDrawerBtn.removeEventListener("click", closeSearch)
  openSearchDrawerBtn.addEventListener("click", openSearch)
  document.removeEventListener("click", handleClickedOutsideSearchField)
  searchInput.removeEventListener("keyup", handleSearch)
  // -----
}

openSearchDrawerBtn.addEventListener("click", openSearch)

function handleSearch(e) {
  const searchValue = e.currentTarget.value.toLowerCase() // Set search value to lowercase for failsafe
  // if no value -> empty and hide the placeholder search results container
  if (!searchValue) {
    handleNoResults()
    return
  }

  // Filter search value against the placeholder content - Replace variable and the content.properties which are checked
  const searchResults = websiteContent.filter((content) => {
    return (
      content.title.toLowerCase().includes(searchValue) ||
      content.description.toLowerCase().includes(searchValue) ||
      content.tags.some((tag) => tag.toLowerCase().includes(searchValue)) // Map over tags and check if any return as true
    )
  })

  // Do something with searchResults ....
  if (!searchResultsContainer) {
    console.log(searchResults)
    return
  }
  generateSearchResults(searchResults.slice(0, 5)) // !PLACEHOLDER FUNCTION FOR PLACEHOLDER SEARCH RESULTS!
}

// !PLACEHOLDER FUNCTION FOR PLACEHOLDER SEARCH RESULTS!
// Generate html based on search results
function generateSearchResults(results) {
  if (!results?.length) {
    searchResultsContainer.innerHTML = "<p class='p-2'>No results.</p>"
    return
  }
  searchResultsContainer.removeAttribute("hidden")
  searchResultsContainer.innerHTML = ""
  results.forEach((result) => {
    const linkElement = document.createElement("a")
    linkElement.href = result.href
    linkElement.classList.add(
      "w-96",
      "flex",
      "items-center",
      "gap-3",
      "border-b",
      "p-2"
    )

    const container = document.createElement("div")

    const thumbnail = document.createElement("img")
    thumbnail.classList.add(
      "w-16",
      "rounded-full",
      "border",
      "bg-frost-blue",
      "p-5"
    )
    thumbnail.src = result.thumbnail
    thumbnail.alt = result.alt

    const titleElement = document.createElement("p")
    titleElement.textContent = result.title

    const descriptionElement = document.createElement("p")
    descriptionElement.textContent = result.description

    container.append(titleElement, descriptionElement)
    linkElement.append(thumbnail, container)
    searchResultsContainer.appendChild(linkElement)
  })
}

// Empty and hide the search results container
function handleNoResults() {
  searchResultsContainer.innerHTML = ""
  searchResultsContainer.setAttribute("hidden", true)
}
