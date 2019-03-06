import React from 'react'
import PropTypes from 'prop-types'

const Lion = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 434.4 478.97">
    <g fill={color} transform="translate(-39.4 -9.84)">
      <path d="m181.78 178.88 8.73 11.47s31.14 8.47 30.86 10.11 2.46 36.59 2.46 36.59l10.38-45.61z" />
      <path d="m279 191.44 10.37 45.61s2.74-35 2.46-36.59 30.86-10.11 30.86-10.11l8.74-11.47z" />
      <path d="m380 159.58-30.59-27.67 50.25-3.64-32-19.67-32.41 4.4s16.75-13.86 17.85-14.59-42.61 13.47-42.61 13.47l20.39-28.76s-51.34 30.58-52.43 30.95 29.13-45.88 29.13-45.88l-51 36.13-51-36.13s30.22 46.24 29.13 45.88-52.44-30.95-52.44-30.95l20.39 28.76s-43.66-14.2-42.55-13.47 17.89 14.59 17.89 14.59l-32.41-4.37-32 19.67 50.25 3.64-30.59 27.67 21.12-6.92-34.95 62.27 24.39-16.75-18.93 50.61s8.74 49.16 9.1 47.7l13.84-53.89 3.64 82.66 9.47-41.15 11.2 49.86 18.93 43.33.73-37.87 13.11 56.08s16.75 22.21 16 19.66-3.64-40.06-3.64-40.06l15.65 39.33 23.67 21.85 23.67-21.85 15.66-39.33s-2.91 37.51-3.64 40.06 16-19.66 16-19.66l13.11-56.08.73 37.87 18.97-43.33 11.29-49.89 9.47 41.15 3.64-82.66s13.52 52.4 13.83 53.89 9.11-47.7 9.11-47.7l-18.94-50.61 24.4 16.75-35-62.27zm-98.27 198.81 2.91-11.65 1.46-12-17.1 22.93-12.4-13.58-12.38 13.58-17.11-22.94 1.46 12 2.91 11.65-17.12-15.65 6.19-26.22 15.26-9.15a40.42 40.42 0 0 1 41.59 0l15.25 9.15 6.19 26.22zm53-135.81 13.09-9.58-14.75 35-25.67-7.92 12.83 18.3-22.12-15.29 37.42 39.6-33.59 25.67-43.15-19.39v-13.97l7.92-15.29 18.29-4.1-11.47-7.1-6.82 2.73h-20.21l-6.83-2.73-11.47 7.1 18.3 4.1 7.92 15.29v13.93l-43.15 19.39-33.59-25.67 37.41-39.6-22.09 15.3 12.84-18.3-25.7 7.95-14.75-35 13.11 9.56-17.75-29.5 1.64-18 5.73 9.83 17.21-34.68.54 7.92 19.94-23.22-10.11-16.91 21.58 15.57-6.56-14.75 21.85 17.75-6.83-14.75 30.86 18.39 30.86-18.39-6.82 14.75 21.84-17.75-6.55 14.75 21.57-15.57-10.1 16.93 19.93 23.22.55-7.92 17.21 34.68 5.73-9.83 1.64 18z" />
      <path d="m473.8 230.22-20.48-34.41-12.83-36.59 27 12.56s-49.69-57.3-51-57.88c1.08.42 25.11 8.18 25.11 8.18l-51.91-63.91-24.85-10.65h37.41l-45.6-23.21-14.75 4.69-37.41-19.16-47.89 26.74-47.88-26.74-37.41 19.16-14.75-4.64-45.56 23.16h37.42l-24.91 10.65-51.88 63.91s24-7.76 25.1-8.18c-1.35.58-51.05 57.88-51.05 57.88l27-12.56-12.8 36.59-20.48 34.41 27.86-12.56-20.48 33.86 2.45 33.59s17.77-22.66 17.77-21.3v51.07l37.42 65.54.54-47 22.94 72.1 40.42 31.68-10.92-35.5 33.86 48.61 38.74 21.33-1.09-32.23 27.67 49.4 27.68-49.4-1.1 32.23 38.84-21.3 33.87-48.61-10.93 35.5 40.42-31.68 22.94-72.1.55 47 37.41-65.54v-51.1c0-1.36 17.75 21.3 17.75 21.3l2.46-33.59-20.47-33.86zm-39.87 67.78-14.2 35.5-25.67-73.19-1.64 100.5-22.42 46.38 6-91.76-12 58.44-20.21 24 4.92-55.71-34.41 97.22s-23.88 17.37-24.57 19.1c.72-1.86 19.65-54.05 19.65-54.05l-52.8 53.3-52.8-53.3s18.94 52.19 19.66 54.05c-.69-1.73-24.57-19.1-24.57-19.1l-34.41-97.22 4.91 55.71-20.2-24-12-58.44 6 91.76-22.4-46.43-1.63-100.5-25.67 73.19-14.2-35.45 43.73-112.56-55.74 57.89 56.25-88.48-56.8 48.06 13.11-41 26.18-28.91-18.57 9.29 28.4-35.51 37.69-7.1-32.74-13.68 27.31-18 35 5.47-38.27-18.57 35.5-3.83 36.59 14.2-45.91-32.22 20.76 3.28 55.16 36-23.45-27.81-26.22-20.76 44.24 20.24 15.11 32.42 15.11-32.42 44.29-20.24-26.26 20.76-23.49 27.85 55.17-36 20.75-3.28-45.88 32.18 36.6-14.2 35.5 3.83-38.23 18.57 34.95-5.47 27.31 18-32.77 13.68 37.69 7.1 28.4 35.51-18.57-9.29 26.22 29 13.1 41-56.8-48.06 56.31 88.39-55.71-57.89z" />
    </g>
  </svg>
)

Lion.defaultProps = {
  color: ({ theme }) => theme.color.black,
  size: 50,
}

Lion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Lion