import React from 'react'
import { Icon } from '@iconify/react'

function Footer() {
  return (
    <>
      <footer>
        <p>
          Open source by <Icon icon="akar-icons:instagram-fill" />{' '}
          <Icon icon="akar-icons:github-fill" />{' '}
          <Icon icon="brandico:linkedin-rect" />{' '}
          <a
            href="https://links.phricardo.com.br/"
            rel="noopener"
            target="_blank"
          >
            @phricardorj
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer
