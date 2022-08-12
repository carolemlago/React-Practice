function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return(
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
  
}

function MainComponent() {
    return(
        <div>
            <h1> Fun Facts About React </h1>
            <ul>
                <li> It's composable</li>
                <li> It's declarative </li>
                <li> It's reusable</li>
                <li> It's hireable skill </li>
                <li> It's maintainable</li>
            </ul>
        </div>
    )
  
}

function Page() {
    return (
        <div>
            <Header/>
            <MainComponent />
            <Footer/>
        </div>
    )
}
// Function that takes two arguments: HTML code (content) and HTML element (where content will be displayed in the page)
ReactDOM.render(<Page/>, document.getElementById("root"))