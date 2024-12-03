import React from 'react'

const Homelayout = () => {
  return (

    <div>
      <header>
        <h1>PromptHub</h1>
        <p>Explore and Share Creative GPT Prompts</p>
      </header>
      <nav>
        <a href="#explore">Explore Prompts</a>
        <a href="#share">Share a Prompt</a>
        <a href="#categories">Categories</a>
        <a href="#account">My Account</a>
      </nav>
      <div>
        <section id="explore">
          <h2>Explore Prompts</h2>
          <div>
            <h3>Creative Writing Prompt</h3>
            <p>"Write a story about a world where people communicate only through music."</p>
            <button>Try Prompt</button>
          </div>
          <div>
            <h3>Code Assistant Prompt</h3>
            <p>"Generate a Python script for scraping data from a website."</p>
            <button>Try Prompt</button>
          </div>
        </section>
        <section id="share">
          <h2>Share Your Prompt</h2>
          <form>
            <label htmlFor="title">Prompt Title:</label>
            <br />
            <input type="text" id="title" name="title" required />
            <br />
            <br />
            <label htmlFor="description">Prompt Description:</label>
            <br />
            <textarea id="description" name="description" rows="4" required></textarea>
            <br />
            <br />
            <button type="submit">Share Prompt</button>
          </form>
        </section>
        <section id="categories">
          <h2>Categories</h2>
          <ul>
            <li>Creative Writing</li>
            <li>Programming</li>
            <li>Marketing</li>
            <li>Educational</li>
          </ul>
        </section>
      </div>
      <footer>
        <p>&copy; 2024 PromptHub. All Rights Reserved.</p>
      </footer>
    </div>
   
  
 )
}

export default Homelayout


