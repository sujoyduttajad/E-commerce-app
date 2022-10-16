import React from "react";

export function LogoIcon({ paramWidth, paramHeight }) {
  return (
    <svg
      width={`${paramWidth ? paramWidth : "232"}`}
      height={`${paramHeight ? paramHeight : "49"}`}
      viewBox="0 0 232 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80023 11.6001V7.25007C5.80023 6.25247 5.98873 5.31577 6.36573 4.43997C6.74273 3.54967 7.26473 2.77827 7.92883 2.12867C8.57843 1.46457 9.34983 0.942571 10.2401 0.565571C11.1159 0.188571 12.0526 7.16249e-05 13.0502 7.16249e-05C13.8651 7.16249e-05 14.6423 0.127671 15.3847 0.385771C16.1271 0.643871 16.8057 1.00637 17.4234 1.47327C18.6632 0.517476 20.1848 -0.000584943 21.7502 7.16249e-05C23.1791 -0.00629904 24.5777 0.412442 25.768 1.20304C26.9583 1.99364 27.8865 3.12038 28.4347 4.43997C28.8117 5.31577 29.0002 6.25247 29.0002 7.25007V11.6001H31.9002C32.6694 11.6001 33.407 11.9056 33.9508 12.4495C34.4947 12.9933 34.8002 13.7309 34.8002 14.5001V37.7001C34.8002 38.9094 34.574 40.0404 34.1216 41.0989C33.6692 42.14 33.0486 43.0622 32.2627 43.8626C31.7407 44.373 31.1694 44.8138 30.5401 45.185L28.8291 44.4426L27.3936 43.8017L26.7788 43.4624L26.135 42.9839L25.4361 42.3691L24.6589 41.5397C23.7089 40.4877 23.1883 39.1175 23.2002 37.7001V11.6001H26.1002V7.25007C26.1002 6.64687 25.9871 6.07847 25.7609 5.55067C25.4327 4.75948 24.8755 4.08443 24.1609 3.61215C23.4462 3.13986 22.6068 2.8919 21.7502 2.90007C20.8599 2.90007 20.0595 3.14947 19.349 3.64827C19.974 4.74568 20.3019 5.98717 20.3002 7.25007V37.7001C20.288 39.8434 21.0807 41.9133 22.5216 43.5001L23.4177 44.4571L24.3109 45.2401L25.207 45.9071L26.1002 46.4001H8.70023C6.39872 46.3996 4.19117 45.4872 2.56093 43.8626C1.7652 43.0686 1.1275 42.1308 0.681733 41.0989C0.223587 40.0248 -0.00840032 38.8678 0.000232369 37.7001V14.5001C0.000232369 13.7309 0.305768 12.9933 0.849623 12.4495C1.39348 11.9056 2.1311 11.6001 2.90023 11.6001H5.80023ZM8.70023 11.6001H17.4002V7.25007C17.4002 6.64687 17.2871 6.07847 17.0609 5.55067C16.7327 4.75948 16.1755 4.08443 15.4609 3.61215C14.7462 3.13986 13.9068 2.8919 13.0502 2.90007C12.447 2.90007 11.8786 3.01317 11.3508 3.23937C10.5596 3.56763 9.88459 4.12483 9.41231 4.83945C8.94002 5.55408 8.69206 6.39353 8.70023 7.25007V11.6001Z"
        fill="#FF9A62"
      />
      <path
        d="M54.98 12.8C58.028 12.8 60.284 13.304 61.748 14.312C63.236 15.296 63.98 17.048 63.98 19.568C63.98 22.088 63.248 24.092 61.784 25.58C60.32 27.044 57.956 27.776 54.692 27.776H51.668L51.56 35.588L54.368 35.84C54.368 36.512 54.164 37.232 53.756 38H45.656L45.548 36.776C46.556 36.392 47.588 36.104 48.644 35.912C48.5 26.552 48.38 19.592 48.284 15.032C47.636 14.912 46.58 14.624 45.116 14.168L45.296 12.8H54.98ZM54.332 25.436C56.396 25.412 57.968 24.896 59.048 23.888C60.128 22.856 60.668 21.5 60.668 19.82C60.668 18.14 60.14 16.976 59.084 16.328C58.028 15.656 56.336 15.32 54.008 15.32C53.576 15.32 52.844 15.332 51.812 15.356C51.812 15.38 51.776 18.752 51.704 25.472L54.332 25.436ZM82.131 15.68C81.363 15.44 80.343 15.32 79.071 15.32H76.083L75.975 24.392L78.711 24.356C80.487 24.332 81.903 23.972 82.959 23.276C84.015 22.58 84.543 21.26 84.543 19.316C84.543 17.348 83.739 16.136 82.131 15.68ZM75.939 26.696L75.831 35.588L78.819 35.84C78.819 36.512 78.615 37.232 78.207 38H69.927L69.819 36.74C70.827 36.38 71.859 36.104 72.915 35.912C72.771 26.792 72.651 19.832 72.555 15.032C71.883 14.936 70.827 14.648 69.387 14.168C69.387 13.856 69.447 13.4 69.567 12.8H77.667C82.059 12.8 84.915 13.34 86.235 14.42C87.531 15.452 88.179 17.072 88.179 19.28C88.179 23 86.139 25.412 82.059 26.516L88.215 35.624L91.203 35.876C91.203 36.524 90.999 37.232 90.591 38H86.163L78.603 26.696H75.939ZM104.316 15.104L103.956 35.552L106.98 35.84C106.98 36.512 106.776 37.232 106.368 38H98.088L97.98 36.74C99.084 36.356 100.176 36.068 101.256 35.876C101.208 34.316 101.124 31.1 101.004 26.228C100.908 21.356 100.824 17.588 100.752 14.924C99.792 14.732 98.712 14.444 97.512 14.06L97.62 12.8H106.62C107.028 13.568 107.232 14.288 107.232 14.96C106.008 15.056 105.036 15.104 104.316 15.104ZM140.204 15.284L143.984 35.552L147.26 35.876C147.26 36.524 147.056 37.232 146.648 38H138.368L138.26 36.74C138.98 36.428 139.868 36.176 140.924 35.984L137.072 15.788L132.32 36.272H128.756L122.204 15.716L119.288 35.552L122.348 35.84C122.348 36.512 122.144 37.232 121.736 38H113.456L113.348 36.74C114.404 36.356 115.46 36.068 116.516 35.876L119.684 14.996C118.22 14.78 117.056 14.528 116.192 14.24L116.336 12.8H124.724L130.448 32.528H130.592L135.056 12.8H143.084C143.492 13.568 143.696 14.312 143.696 15.032C142.136 15.2 140.972 15.284 140.204 15.284ZM157.184 13.556C157.616 13.412 158.792 13.256 160.712 13.088C162.632 12.896 164.372 12.8 165.932 12.8C167.516 12.8 168.74 12.872 169.604 13.016C169.628 13.112 169.64 13.232 169.64 13.376C169.64 13.496 169.568 13.796 169.424 14.276C169.304 14.756 169.208 15.068 169.136 15.212C168.944 15.404 168.404 15.548 167.516 15.644L174.392 35.552L177.812 35.84C177.812 36.512 177.608 37.232 177.2 38H168.92L168.812 36.74C169.364 36.452 170.168 36.2 171.224 35.984L169.388 30.836H159.344L157.652 35.552L160.568 35.84C160.568 36.512 160.364 37.232 159.956 38H151.676L151.568 36.74C152.504 36.404 153.5 36.14 154.556 35.948L161.54 15.536C159.404 15.296 157.904 15.008 157.04 14.672L157.184 13.556ZM166.544 22.808L164.636 15.752C164.492 15.728 164.288 15.716 164.024 15.716L162.08 23.06L159.992 28.532H168.74L166.544 22.808ZM195.426 15.68C194.658 15.44 193.638 15.32 192.366 15.32H189.378L189.27 24.392L192.006 24.356C193.782 24.332 195.198 23.972 196.254 23.276C197.31 22.58 197.838 21.26 197.838 19.316C197.838 17.348 197.034 16.136 195.426 15.68ZM189.234 26.696L189.126 35.588L192.114 35.84C192.114 36.512 191.91 37.232 191.502 38H183.222L183.114 36.74C184.122 36.38 185.154 36.104 186.21 35.912C186.066 26.792 185.946 19.832 185.85 15.032C185.178 14.936 184.122 14.648 182.682 14.168C182.682 13.856 182.742 13.4 182.862 12.8H190.962C195.354 12.8 198.21 13.34 199.53 14.42C200.826 15.452 201.474 17.072 201.474 19.28C201.474 23 199.434 25.412 195.354 26.516L201.51 35.624L204.498 35.876C204.498 36.524 204.294 37.232 203.886 38H199.458L191.898 26.696H189.234ZM221.931 15.032C221.811 19.064 221.679 25.904 221.535 35.552L224.559 35.84C224.559 36.512 224.355 37.232 223.947 38H215.667L215.559 36.74C216.951 36.236 218.055 35.948 218.871 35.876C218.631 26.612 218.439 19.664 218.295 15.032H213.039L212.175 18.704L210.087 18.56C209.727 17.096 209.547 15.608 209.547 14.096C209.547 13.808 209.571 13.376 209.619 12.8H230.355C230.403 13.112 230.427 13.592 230.427 14.24C230.427 15.536 230.259 16.952 229.923 18.488C229.395 18.632 228.699 18.704 227.835 18.704L226.935 15.032H221.931Z"
        fill="#D2CEB6"
      />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450.297 450.297"
      height={20}
      width={20}
      fill="#fff"
    >
      <path d="M450.297 105.211v-30H326.751l-7.347-45h31.235v-30h-66.53l12.245 75H0l25.888 158.454c2.833 17.282 19.479 31.422 36.992 31.422h264.474l8.98 55H30.993v30h340.636l-13.878-85h92.545v-30h-97.443l-8.222-50.358h105.665v-30H339.734l-8.085-49.518h118.648z" />
      <circle cx="65.993" cy="415.086" r={35} />
      <circle cx="321.593" cy="415.086" r={35} />
    </svg>
  );
}

export function BrandName() {
  return (
    <svg
      width="186"
      height="26"
      viewBox="0 0 186 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.98 0.799998C13.028 0.799998 15.284 1.304 16.748 2.312C18.236 3.296 18.98 5.048 18.98 7.568C18.98 10.088 18.248 12.092 16.784 13.58C15.32 15.044 12.956 15.776 9.692 15.776H6.668L6.56 23.588L9.368 23.84C9.368 24.512 9.164 25.232 8.756 26H0.656L0.548 24.776C1.556 24.392 2.588 24.104 3.644 23.912C3.5 14.552 3.38 7.592 3.284 3.032C2.636 2.912 1.58 2.624 0.116 2.168L0.296 0.799998H9.98ZM9.332 13.436C11.396 13.412 12.968 12.896 14.048 11.888C15.128 10.856 15.668 9.5 15.668 7.82C15.668 6.14 15.14 4.976 14.084 4.328C13.028 3.656 11.336 3.32 9.008 3.32C8.576 3.32 7.844 3.332 6.812 3.356C6.812 3.38 6.776 6.752 6.704 13.472L9.332 13.436ZM37.131 3.68C36.363 3.44 35.343 3.32 34.071 3.32H31.083L30.975 12.392L33.711 12.356C35.487 12.332 36.903 11.972 37.959 11.276C39.015 10.58 39.543 9.26 39.543 7.316C39.543 5.348 38.739 4.136 37.131 3.68ZM30.939 14.696L30.831 23.588L33.819 23.84C33.819 24.512 33.615 25.232 33.207 26H24.927L24.819 24.74C25.827 24.38 26.859 24.104 27.915 23.912C27.771 14.792 27.651 7.832 27.555 3.032C26.883 2.936 25.827 2.648 24.387 2.168C24.387 1.856 24.447 1.4 24.567 0.799998H32.667C37.059 0.799998 39.915 1.34 41.235 2.42C42.531 3.452 43.179 5.072 43.179 7.28C43.179 11 41.139 13.412 37.059 14.516L43.215 23.624L46.203 23.876C46.203 24.524 45.999 25.232 45.591 26H41.163L33.603 14.696H30.939ZM59.316 3.104L58.956 23.552L61.98 23.84C61.98 24.512 61.776 25.232 61.368 26H53.088L52.98 24.74C54.084 24.356 55.176 24.068 56.256 23.876C56.208 22.316 56.124 19.1 56.004 14.228C55.908 9.356 55.824 5.588 55.752 2.924C54.792 2.732 53.712 2.444 52.512 2.06L52.62 0.799998H61.62C62.028 1.568 62.232 2.288 62.232 2.96C61.008 3.056 60.036 3.104 59.316 3.104ZM95.2038 3.284L98.9838 23.552L102.26 23.876C102.26 24.524 102.056 25.232 101.648 26H93.3678L93.2598 24.74C93.9798 24.428 94.8678 24.176 95.9238 23.984L92.0718 3.788L87.3198 24.272H83.7558L77.2038 3.716L74.2878 23.552L77.3478 23.84C77.3478 24.512 77.1438 25.232 76.7358 26H68.4558L68.3478 24.74C69.4038 24.356 70.4598 24.068 71.5158 23.876L74.6838 2.996C73.2198 2.78 72.0558 2.528 71.1918 2.24L71.3358 0.799998H79.7238L85.4478 20.528H85.5918L90.0558 0.799998H98.0838C98.4918 1.568 98.6958 2.312 98.6958 3.032C97.1358 3.2 95.9718 3.284 95.2038 3.284ZM112.184 1.556C112.616 1.412 113.792 1.256 115.712 1.088C117.632 0.895998 119.372 0.799998 120.932 0.799998C122.516 0.799998 123.74 0.871999 124.604 1.016C124.628 1.112 124.64 1.232 124.64 1.376C124.64 1.496 124.568 1.796 124.424 2.276C124.304 2.756 124.208 3.068 124.136 3.212C123.944 3.404 123.404 3.548 122.516 3.644L129.392 23.552L132.812 23.84C132.812 24.512 132.608 25.232 132.2 26H123.92L123.812 24.74C124.364 24.452 125.168 24.2 126.224 23.984L124.388 18.836H114.344L112.652 23.552L115.568 23.84C115.568 24.512 115.364 25.232 114.956 26H106.676L106.568 24.74C107.504 24.404 108.5 24.14 109.556 23.948L116.54 3.536C114.404 3.296 112.904 3.008 112.04 2.672L112.184 1.556ZM121.544 10.808L119.636 3.752C119.492 3.728 119.288 3.716 119.024 3.716L117.08 11.06L114.992 16.532H123.74L121.544 10.808ZM150.426 3.68C149.658 3.44 148.638 3.32 147.366 3.32H144.378L144.27 12.392L147.006 12.356C148.782 12.332 150.198 11.972 151.254 11.276C152.31 10.58 152.838 9.26 152.838 7.316C152.838 5.348 152.034 4.136 150.426 3.68ZM144.234 14.696L144.126 23.588L147.114 23.84C147.114 24.512 146.91 25.232 146.502 26H138.222L138.114 24.74C139.122 24.38 140.154 24.104 141.21 23.912C141.066 14.792 140.946 7.832 140.85 3.032C140.178 2.936 139.122 2.648 137.682 2.168C137.682 1.856 137.742 1.4 137.862 0.799998H145.962C150.354 0.799998 153.21 1.34 154.53 2.42C155.826 3.452 156.474 5.072 156.474 7.28C156.474 11 154.434 13.412 150.354 14.516L156.51 23.624L159.498 23.876C159.498 24.524 159.294 25.232 158.886 26H154.458L146.898 14.696H144.234ZM176.931 3.032C176.811 7.064 176.679 13.904 176.535 23.552L179.559 23.84C179.559 24.512 179.355 25.232 178.947 26H170.667L170.559 24.74C171.951 24.236 173.055 23.948 173.871 23.876C173.631 14.612 173.439 7.664 173.295 3.032H168.039L167.175 6.704L165.087 6.56C164.727 5.096 164.547 3.608 164.547 2.096C164.547 1.808 164.571 1.376 164.619 0.799998H185.355C185.403 1.112 185.427 1.592 185.427 2.24C185.427 3.536 185.259 4.952 184.923 6.488C184.395 6.632 183.699 6.704 182.835 6.704L181.935 3.032H176.931Z"
        fill="#D2CEB6"
      />
    </svg>
  );
}

export function Icon() {
  return (
    <svg
      width="35"
      height="47"
      viewBox="0 0 35 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80023 11.6001V7.25007C5.80023 6.25247 5.98873 5.31577 6.36573 4.43997C6.74273 3.54967 7.26473 2.77827 7.92883 2.12867C8.57843 1.46457 9.34983 0.942571 10.2401 0.565571C11.1159 0.188571 12.0526 7.16249e-05 13.0502 7.16249e-05C13.8651 7.16249e-05 14.6423 0.127671 15.3847 0.385771C16.1271 0.643871 16.8057 1.00637 17.4234 1.47327C18.6632 0.517476 20.1848 -0.000584943 21.7502 7.16249e-05C23.1791 -0.00629904 24.5777 0.412442 25.768 1.20304C26.9583 1.99364 27.8865 3.12038 28.4347 4.43997C28.8117 5.31577 29.0002 6.25247 29.0002 7.25007V11.6001H31.9002C32.6694 11.6001 33.407 11.9056 33.9508 12.4495C34.4947 12.9933 34.8002 13.7309 34.8002 14.5001V37.7001C34.8002 38.9094 34.574 40.0404 34.1216 41.0989C33.6692 42.14 33.0486 43.0622 32.2627 43.8626C31.7407 44.373 31.1694 44.8138 30.5401 45.185L28.8291 44.4426L27.3936 43.8017L26.7788 43.4624L26.135 42.9839L25.4361 42.3691L24.6589 41.5397C23.7089 40.4877 23.1883 39.1175 23.2002 37.7001V11.6001H26.1002V7.25007C26.1002 6.64687 25.9871 6.07847 25.7609 5.55067C25.4327 4.75948 24.8755 4.08443 24.1609 3.61215C23.4462 3.13986 22.6068 2.8919 21.7502 2.90007C20.8599 2.90007 20.0595 3.14947 19.349 3.64827C19.974 4.74568 20.3019 5.98717 20.3002 7.25007V37.7001C20.288 39.8434 21.0807 41.9133 22.5216 43.5001L23.4177 44.4571L24.3109 45.2401L25.207 45.9071L26.1002 46.4001H8.70023C6.39872 46.3996 4.19117 45.4872 2.56093 43.8626C1.7652 43.0686 1.1275 42.1308 0.681733 41.0989C0.223587 40.0248 -0.00840032 38.8678 0.000232369 37.7001V14.5001C0.000232369 13.7309 0.305768 12.9933 0.849623 12.4495C1.39348 11.9056 2.1311 11.6001 2.90023 11.6001H5.80023ZM8.70023 11.6001H17.4002V7.25007C17.4002 6.64687 17.2871 6.07847 17.0609 5.55067C16.7327 4.75948 16.1755 4.08443 15.4609 3.61215C14.7462 3.13986 13.9068 2.8919 13.0502 2.90007C12.447 2.90007 11.8786 3.01317 11.3508 3.23937C10.5596 3.56763 9.88459 4.12483 9.41231 4.83945C8.94002 5.55408 8.69206 6.39353 8.70023 7.25007V11.6001Z"
        fill="#FF9A62"
      />
    </svg>
  );
}

export function Tagline({ paramWidth, paramHeight }) {
  return (
    <svg
      width={`${paramWidth ? paramWidth : "211"}`}
      height={`${paramHeight ? paramHeight : "15"}`}
      viewBox="0 0 211 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.052 2.166L2.982 5.54H5.194L5.306 4.532C5.56733 4.532 5.84733 4.61133 6.146 4.77V7.43L5.656 7.472C5.516 7.07067 5.42267 6.73467 5.376 6.464H2.982C2.96333 7.276 2.94467 8.47533 2.926 10.062H6.132L6.468 8.746L7.28 8.802C7.41067 9.334 7.476 9.80533 7.476 10.216C7.476 10.6173 7.46667 10.8787 7.448 11H0.644L0.602 10.51C1.01267 10.3607 1.40933 10.2533 1.792 10.188C1.736 6.548 1.68933 3.84133 1.652 2.068C1.44667 2.04933 1.036 1.93733 0.42 1.732L0.49 1.2H7.238C7.25667 1.32133 7.266 1.508 7.266 1.76C7.266 2.27333 7.20067 2.82867 7.07 3.426C6.86467 3.47267 6.594 3.496 6.258 3.496L5.922 2.166H3.052ZM17.0482 4.826L14.3182 11H13.3242L10.7622 4.84L9.58617 4.728C9.58617 4.46667 9.6655 4.18667 9.82417 3.888H13.2122L13.2542 4.378C12.9555 4.50867 12.6242 4.61133 12.2602 4.686L13.5202 8.508L13.8422 9.74H14.0102L14.3602 8.494L15.6622 4.686L14.4862 4.378L14.5282 3.888H17.9582C18.1168 4.18667 18.1962 4.46667 18.1962 4.728C17.8135 4.77467 17.4308 4.80733 17.0482 4.826ZM23.444 10.216C23.8547 10.216 24.4987 10.02 25.376 9.628C25.5533 9.87067 25.6467 10.0853 25.656 10.272C25.18 10.552 24.7133 10.7713 24.256 10.93C23.7987 11.0887 23.472 11.168 23.276 11.168C22.1933 11.168 21.3673 10.846 20.798 10.202C20.2287 9.54867 19.944 8.63867 19.944 7.472C19.944 6.30533 20.2193 5.39067 20.77 4.728C21.33 4.056 22.1653 3.72 23.276 3.72C24.1347 3.72 24.788 4.028 25.236 4.644C25.6933 5.26 25.922 6.086 25.922 7.122C25.8473 7.25267 25.7867 7.34133 25.74 7.388L21.232 7.318C21.2413 8.26067 21.4047 8.97933 21.722 9.474C22.0487 9.96867 22.6227 10.216 23.444 10.216ZM24.648 6.52C24.648 5.904 24.536 5.428 24.312 5.092C24.088 4.74667 23.7147 4.574 23.192 4.574C22.6693 4.574 22.2027 4.672 21.792 4.868C21.512 5.428 21.3347 6.002 21.26 6.59C21.9973 6.58067 23.1267 6.55733 24.648 6.52ZM32.75 4.896C32.7034 4.84933 32.6007 4.826 32.442 4.826C32.2834 4.826 32.0454 4.882 31.728 4.994C31.42 5.106 31.14 5.23667 30.888 5.386C30.832 7.458 30.7947 9.012 30.776 10.048L31.952 10.16C31.952 10.4213 31.8727 10.7013 31.714 11H28.494L28.452 10.51C28.8814 10.3607 29.3014 10.2487 29.712 10.174C29.656 7.80333 29.6094 6.04867 29.572 4.91C29.0587 4.882 28.648 4.826 28.34 4.742L28.396 4.014C28.8907 3.874 29.6234 3.804 30.594 3.804C30.7434 4.03733 30.8367 4.336 30.874 4.7C31.9474 4.04667 32.5867 3.72 32.792 3.72C32.9974 3.72 33.2354 3.762 33.506 3.846C33.7767 3.92067 33.9774 4.00467 34.108 4.098C34.108 5.03133 34.0194 5.792 33.842 6.38C33.7114 6.41733 33.5574 6.436 33.38 6.436C33.212 6.436 33.0954 6.43133 33.03 6.422L32.75 4.896ZM37.5971 13.604C37.9518 13.604 38.2971 13.2633 38.6331 12.582C38.9784 11.9007 39.1744 11.3733 39.2211 11H38.8851L36.6731 4.84L35.4971 4.728C35.4971 4.46667 35.5764 4.18667 35.7351 3.888H38.9551L38.9971 4.378C38.6984 4.50867 38.3671 4.61133 38.0031 4.686L39.2211 8.508L39.5431 9.74H39.6831L41.3631 4.686L40.1871 4.378L40.2291 3.888H43.3791C43.5378 4.18667 43.6171 4.46667 43.6171 4.728C43.2344 4.77467 42.8518 4.80733 42.4691 4.826C42.2264 5.53533 41.8624 6.59467 41.3771 8.004C40.9011 9.41333 40.5231 10.5053 40.2431 11.28C39.9724 12.0547 39.7018 12.6847 39.4311 13.17C39.1604 13.6553 38.8898 13.9773 38.6191 14.136C38.3578 14.304 38.0638 14.388 37.7371 14.388C37.1584 14.388 36.6171 14.276 36.1131 14.052L35.8611 13.926C35.9264 12.862 35.9684 12.2787 35.9871 12.176C36.0618 12.148 36.3324 12.134 36.7991 12.134L37.2751 13.562C37.3591 13.59 37.4664 13.604 37.5971 13.604ZM46.3427 10.132L46.2307 4.854H45.1527L45.1107 4.364C45.2041 4.29867 45.4747 4.17733 45.9227 4L47.0707 2.208C47.2574 2.22667 47.4021 2.27333 47.5047 2.348L47.4907 3.888C48.1907 3.888 48.7647 3.93467 49.2127 4.028C49.2127 4.28 49.1334 4.55533 48.9747 4.854H47.4627C47.4441 5.974 47.4254 7.67267 47.4067 9.95C47.9294 9.978 48.4521 10.0713 48.9747 10.23L48.9607 10.72C48.8301 10.804 48.4941 10.902 47.9527 11.014C47.4207 11.126 46.9821 11.182 46.6367 11.182C46.5901 11.1073 46.5294 10.9487 46.4547 10.706C46.3801 10.454 46.3427 10.2627 46.3427 10.132ZM53.5339 0.598C53.8233 0.598 54.0286 0.607333 54.1499 0.625999C54.1499 0.793999 54.1219 1.01333 54.0659 1.284C54.0193 1.54533 53.9866 1.69933 53.9679 1.746C53.9679 1.95133 53.9586 2.376 53.9399 3.02C53.9213 3.664 53.9119 4.16333 53.9119 4.518C54.3133 4.30333 54.7099 4.11667 55.1019 3.958C55.5033 3.79933 55.7553 3.72 55.8579 3.72C56.7539 3.72 57.4026 3.944 57.8039 4.392C58.2053 4.83067 58.4059 5.50267 58.4059 6.408C58.4059 6.66933 58.3686 7.88267 58.2939 10.048L59.4699 10.16C59.4699 10.4213 59.3906 10.7013 59.2319 11H56.0119L55.9699 10.51C56.3993 10.3607 56.8193 10.2487 57.2299 10.174C57.1739 7.72867 57.1226 6.37067 57.0759 6.1C57.0386 5.82 56.9733 5.57733 56.8799 5.372C56.7866 5.16667 56.6466 5.022 56.4599 4.938C56.2733 4.854 56.0259 4.812 55.7179 4.812C55.0833 4.812 54.4766 4.96133 53.8979 5.26L53.8139 10.048L54.9899 10.16C54.9899 10.4213 54.9106 10.7013 54.7519 11H51.5319L51.4899 10.51C51.9193 10.3607 52.3393 10.2487 52.7499 10.174L52.5819 1.704C52.0686 1.676 51.6579 1.62 51.3499 1.536L51.4059 0.807999C51.8819 0.668 52.5913 0.598 53.5339 0.598ZM64.1345 2.558C63.8919 2.614 63.6539 2.642 63.4205 2.642C63.1965 2.642 62.9725 2.628 62.7485 2.6C62.6925 2.33867 62.6645 2.07733 62.6645 1.816C62.6645 1.54533 62.6739 1.34467 62.6925 1.214C62.8979 1.16733 63.1125 1.144 63.3365 1.144C63.5699 1.144 63.8172 1.15333 64.0785 1.172C64.1345 1.41467 64.1625 1.65267 64.1625 1.886C64.1625 2.11 64.1532 2.334 64.1345 2.558ZM61.5865 4.028C62.3799 3.888 62.9959 3.818 63.4345 3.818C63.8732 3.818 64.1532 3.82733 64.2745 3.846C64.2745 4.07 64.2465 4.31733 64.1905 4.588C64.1345 4.85867 64.1019 4.98933 64.0925 4.98L63.9665 10.048L65.1425 10.16C65.1425 10.4213 65.0632 10.7013 64.9045 11H61.6845L61.6425 10.51C62.0719 10.3607 62.4919 10.2487 62.9025 10.174C62.8465 7.84067 62.7999 6.09067 62.7625 4.924C62.2212 4.924 61.8105 4.868 61.5305 4.756L61.5865 4.028ZM71.6892 3.72C72.5852 3.72 73.2339 3.944 73.6352 4.392C74.0365 4.83067 74.2372 5.50267 74.2372 6.408C74.2372 6.66933 74.1999 7.88267 74.1252 10.048L75.3012 10.16C75.3012 10.4213 75.2219 10.7013 75.0632 11H71.8432L71.8012 10.51C72.2305 10.3607 72.6505 10.2487 73.0612 10.174C73.0052 7.72867 72.9539 6.37067 72.9072 6.1C72.8699 5.82 72.8045 5.57733 72.7112 5.372C72.6179 5.16667 72.4779 5.022 72.2912 4.938C72.1045 4.854 71.8572 4.812 71.5492 4.812C70.9332 4.812 70.3359 4.96133 69.7572 5.26C69.7012 7.388 69.6639 8.984 69.6452 10.048L70.8212 10.16C70.8212 10.4213 70.7419 10.7013 70.5832 11H67.3632L67.3212 10.51C67.7505 10.3607 68.1705 10.2487 68.5812 10.174C68.5252 7.80333 68.4785 6.04867 68.4412 4.91C67.9279 4.882 67.5172 4.826 67.2092 4.742L67.2652 4.014C67.7692 3.874 68.5019 3.804 69.4632 3.804C69.5752 3.972 69.6592 4.21467 69.7152 4.532C70.1165 4.31733 70.5179 4.13067 70.9192 3.972C71.3299 3.804 71.5865 3.72 71.6892 3.72ZM81.0441 10.146L82.2901 10.118C83.5781 10.118 84.2221 10.65 84.2221 11.714C84.2221 12.2087 84.0075 12.666 83.5781 13.086C83.1581 13.5153 82.6541 13.8373 82.0661 14.052C81.4781 14.2667 80.9275 14.374 80.4141 14.374C79.9101 14.374 79.4388 14.2993 79.0001 14.15C78.5615 14.01 78.1881 13.7767 77.8801 13.45C77.5721 13.1233 77.4181 12.7453 77.4181 12.316C77.4181 12.2133 77.5815 11.9427 77.9081 11.504C78.2441 11.0747 78.4635 10.8227 78.5661 10.748C78.4821 10.692 78.3188 10.5333 78.0761 10.272C77.8335 10.0013 77.6981 9.81467 77.6701 9.712C77.9035 9.28267 78.2721 8.86267 78.7761 8.452C78.0295 8.004 77.6561 7.26667 77.6561 6.24C77.6561 5.41867 77.9175 4.79333 78.4401 4.364C78.9628 3.93467 79.6161 3.72 80.4001 3.72C81.1841 3.72 81.7908 3.846 82.2201 4.098C82.9668 3.94867 83.6995 3.874 84.4181 3.874C84.5955 3.874 84.6841 3.98133 84.6841 4.196C84.6841 4.56933 84.6141 4.826 84.4741 4.966L82.8641 4.7C83.2001 5.12933 83.3681 5.64267 83.3681 6.24C83.3681 7.17333 83.0928 7.84533 82.5421 8.256C81.9915 8.65733 81.3148 8.858 80.5121 8.858C80.2601 8.858 79.9615 8.82533 79.6161 8.76C79.4761 9.04933 79.2988 9.362 79.0841 9.698C79.2521 9.99667 79.9055 10.146 81.0441 10.146ZM82.8221 12.722C82.9155 12.4607 82.9621 12.19 82.9621 11.91C82.9621 11.6393 82.8548 11.42 82.6401 11.252C82.4255 11.084 82.1501 11 81.8141 11C80.4795 11 79.6628 10.986 79.3641 10.958C79.1121 11.3593 78.9348 11.6953 78.8321 11.966C78.7388 12.246 78.6921 12.4047 78.6921 12.442C78.6921 12.806 78.8648 13.0767 79.2101 13.254C79.5555 13.4313 79.9521 13.52 80.4001 13.52C80.8575 13.52 81.3148 13.4453 81.7721 13.296C82.2388 13.1467 82.5888 12.9553 82.8221 12.722ZM82.1081 6.296C82.1081 5.13867 81.5761 4.56 80.5121 4.56C79.4481 4.56 78.9161 5.12 78.9161 6.24C78.9161 6.80933 79.0561 7.248 79.3361 7.556C79.6161 7.864 80.0221 8.018 80.5541 8.018C81.5901 8.018 82.1081 7.444 82.1081 6.296ZM93.8386 0.598C94.1279 0.598 94.3333 0.607333 94.4546 0.625999C94.4546 0.793999 94.4266 1.01333 94.3706 1.284C94.3239 1.54533 94.2913 1.69933 94.2726 1.746C94.2726 1.95133 94.2633 2.376 94.2446 3.02C94.2259 3.664 94.2166 4.16333 94.2166 4.518C94.6179 4.30333 95.0146 4.11667 95.4066 3.958C95.8079 3.79933 96.0599 3.72 96.1626 3.72C97.0586 3.72 97.7073 3.944 98.1086 4.392C98.5099 4.83067 98.7106 5.50267 98.7106 6.408C98.7106 6.66933 98.6733 7.88267 98.5986 10.048L99.7746 10.16C99.7746 10.4213 99.6953 10.7013 99.5366 11H96.3166L96.2746 10.51C96.7039 10.3607 97.1239 10.2487 97.5346 10.174C97.4786 7.72867 97.4273 6.37067 97.3806 6.1C97.3433 5.82 97.2779 5.57733 97.1846 5.372C97.0913 5.16667 96.9513 5.022 96.7646 4.938C96.5779 4.854 96.3306 4.812 96.0226 4.812C95.3879 4.812 94.7813 4.96133 94.2026 5.26L94.1186 10.048L95.2946 10.16C95.2946 10.4213 95.2153 10.7013 95.0566 11H91.8366L91.7946 10.51C92.2239 10.3607 92.6439 10.2487 93.0546 10.174L92.8866 1.704C92.3733 1.676 91.9626 1.62 91.6546 1.536L91.7106 0.807999C92.1866 0.668 92.8959 0.598 93.8386 0.598ZM105.475 10.216C105.886 10.216 106.53 10.02 107.407 9.628C107.585 9.87067 107.678 10.0853 107.687 10.272C107.211 10.552 106.745 10.7713 106.287 10.93C105.83 11.0887 105.503 11.168 105.307 11.168C104.225 11.168 103.399 10.846 102.829 10.202C102.26 9.54867 101.975 8.63867 101.975 7.472C101.975 6.30533 102.251 5.39067 102.801 4.728C103.361 4.056 104.197 3.72 105.307 3.72C106.166 3.72 106.819 4.028 107.267 4.644C107.725 5.26 107.953 6.086 107.953 7.122C107.879 7.25267 107.818 7.34133 107.771 7.388L103.263 7.318C103.273 8.26067 103.436 8.97933 103.753 9.474C104.08 9.96867 104.654 10.216 105.475 10.216ZM106.679 6.52C106.679 5.904 106.567 5.428 106.343 5.092C106.119 4.74667 105.746 4.574 105.223 4.574C104.701 4.574 104.234 4.672 103.823 4.868C103.543 5.428 103.366 6.002 103.291 6.59C104.029 6.58067 105.158 6.55733 106.679 6.52ZM114.781 4.896C114.735 4.84933 114.632 4.826 114.473 4.826C114.315 4.826 114.077 4.882 113.759 4.994C113.451 5.106 113.171 5.23667 112.919 5.386C112.863 7.458 112.826 9.012 112.807 10.048L113.983 10.16C113.983 10.4213 113.904 10.7013 113.745 11H110.525L110.483 10.51C110.913 10.3607 111.333 10.2487 111.743 10.174C111.687 7.80333 111.641 6.04867 111.603 4.91C111.09 4.882 110.679 4.826 110.371 4.742L110.427 4.014C110.922 3.874 111.655 3.804 112.625 3.804C112.775 4.03733 112.868 4.336 112.905 4.7C113.979 4.04667 114.618 3.72 114.823 3.72C115.029 3.72 115.267 3.762 115.537 3.846C115.808 3.92067 116.009 4.00467 116.139 4.098C116.139 5.03133 116.051 5.792 115.873 6.38C115.743 6.41733 115.589 6.436 115.411 6.436C115.243 6.436 115.127 6.43133 115.061 6.422L114.781 4.896ZM121.728 10.216C122.139 10.216 122.783 10.02 123.66 9.628C123.838 9.87067 123.931 10.0853 123.94 10.272C123.464 10.552 122.998 10.7713 122.54 10.93C122.083 11.0887 121.756 11.168 121.56 11.168C120.478 11.168 119.652 10.846 119.082 10.202C118.513 9.54867 118.228 8.63867 118.228 7.472C118.228 6.30533 118.504 5.39067 119.054 4.728C119.614 4.056 120.45 3.72 121.56 3.72C122.419 3.72 123.072 4.028 123.52 4.644C123.978 5.26 124.206 6.086 124.206 7.122C124.132 7.25267 124.071 7.34133 124.024 7.388L119.516 7.318C119.526 8.26067 119.689 8.97933 120.006 9.474C120.333 9.96867 120.907 10.216 121.728 10.216ZM122.932 6.52C122.932 5.904 122.82 5.428 122.596 5.092C122.372 4.74667 121.999 4.574 121.476 4.574C120.954 4.574 120.487 4.672 120.076 4.868C119.796 5.428 119.619 6.002 119.544 6.59C120.282 6.58067 121.411 6.55733 122.932 6.52ZM137.401 6.422L137.331 10.034C137.732 10.062 138.134 10.1273 138.535 10.23L138.507 10.72C138.358 10.7947 138.087 10.8787 137.695 10.972C137.312 11.056 136.934 11.098 136.561 11.098C136.393 10.762 136.3 10.44 136.281 10.132C135.217 10.832 134.47 11.182 134.041 11.182C133.378 11.182 132.846 11.0047 132.445 10.65C132.044 10.2953 131.843 9.80067 131.843 9.166C131.843 7.70067 132.739 6.94467 134.531 6.898C135.576 6.87 136.104 6.856 136.113 6.856L136.099 6.38C136.08 5.736 135.959 5.274 135.735 4.994C135.511 4.70467 135.11 4.56 134.531 4.56C134.288 4.56 134.027 4.616 133.747 4.728L133.411 6.128C133.364 6.13733 133.285 6.142 133.173 6.142L132.599 6.1C132.45 5.69867 132.37 5.14333 132.361 4.434C132.538 4.34067 132.944 4.20067 133.579 4.014C134.214 3.818 134.62 3.72 134.797 3.72C135.749 3.72 136.421 3.93 136.813 4.35C137.205 4.77 137.401 5.46067 137.401 6.422ZM134.349 10.23C134.62 10.23 135.245 9.92667 136.225 9.32L136.155 7.57C135.52 7.626 134.988 7.67733 134.559 7.724C134.13 7.77067 133.784 7.89667 133.523 8.102C133.262 8.298 133.131 8.61067 133.131 9.04C133.131 9.83333 133.537 10.23 134.349 10.23ZM142.61 0.598C142.899 0.598 143.105 0.607333 143.226 0.625999C143.226 0.952666 143.165 1.326 143.044 1.746C142.96 7.25267 142.918 10.02 142.918 10.048L144.094 10.16C144.094 10.4213 144.015 10.7013 143.856 11H140.636L140.594 10.51C141.023 10.3607 141.443 10.2487 141.854 10.174L141.714 1.704C141.201 1.676 140.79 1.62 140.482 1.536L140.538 0.807999C141.014 0.668 141.705 0.598 142.61 0.598ZM148.139 0.598C148.428 0.598 148.634 0.607333 148.755 0.625999C148.755 0.952666 148.694 1.326 148.573 1.746C148.489 7.25267 148.447 10.02 148.447 10.048L149.623 10.16C149.623 10.4213 149.544 10.7013 149.385 11H146.165L146.123 10.51C146.552 10.3607 146.972 10.2487 147.383 10.174L147.243 1.704C146.73 1.676 146.319 1.62 146.011 1.536L146.067 0.807999C146.543 0.668 147.234 0.598 148.139 0.598ZM162.443 6.422L162.373 10.034C162.774 10.062 163.175 10.1273 163.577 10.23L163.549 10.72C163.399 10.7947 163.129 10.8787 162.737 10.972C162.354 11.056 161.976 11.098 161.603 11.098C161.435 10.762 161.341 10.44 161.323 10.132C160.259 10.832 159.512 11.182 159.083 11.182C158.42 11.182 157.888 11.0047 157.487 10.65C157.085 10.2953 156.885 9.80067 156.885 9.166C156.885 7.70067 157.781 6.94467 159.573 6.898C160.618 6.87 161.145 6.856 161.155 6.856L161.141 6.38C161.122 5.736 161.001 5.274 160.777 4.994C160.553 4.70467 160.151 4.56 159.573 4.56C159.33 4.56 159.069 4.616 158.789 4.728L158.453 6.128C158.406 6.13733 158.327 6.142 158.215 6.142L157.641 6.1C157.491 5.69867 157.412 5.14333 157.403 4.434C157.58 4.34067 157.986 4.20067 158.621 4.014C159.255 3.818 159.661 3.72 159.839 3.72C160.791 3.72 161.463 3.93 161.855 4.35C162.247 4.77 162.443 5.46067 162.443 6.422ZM159.391 10.23C159.661 10.23 160.287 9.92667 161.267 9.32L161.197 7.57C160.562 7.626 160.03 7.67733 159.601 7.724C159.171 7.77067 158.826 7.89667 158.565 8.102C158.303 8.298 158.173 8.61067 158.173 9.04C158.173 9.83333 158.579 10.23 159.391 10.23ZM166.797 10.132L166.685 4.854H165.607L165.565 4.364C165.659 4.29867 165.929 4.17733 166.377 4L167.525 2.208C167.712 2.22667 167.857 2.27333 167.959 2.348L167.945 3.888C168.645 3.888 169.219 3.93467 169.667 4.028C169.667 4.28 169.588 4.55533 169.429 4.854H167.917C167.899 5.974 167.88 7.67267 167.861 9.95C168.384 9.978 168.907 10.0713 169.429 10.23L169.415 10.72C169.285 10.804 168.949 10.902 168.407 11.014C167.875 11.126 167.437 11.182 167.091 11.182C167.045 11.1073 166.984 10.9487 166.909 10.706C166.835 10.454 166.797 10.2627 166.797 10.132ZM180.299 10.328C181.083 10.328 181.611 10.0853 181.881 9.6C182.161 9.10533 182.301 8.40533 182.301 7.5C182.301 6.06267 181.984 5.162 181.349 4.798C181.088 4.64867 180.719 4.574 180.243 4.574C179.777 4.574 179.333 4.672 178.913 4.868C178.54 5.58667 178.353 6.422 178.353 7.374C178.353 8.28867 178.475 8.99333 178.717 9.488C178.997 10.048 179.525 10.328 180.299 10.328ZM177.065 7.5C177.065 6.31467 177.336 5.39067 177.877 4.728C178.419 4.056 179.254 3.72 180.383 3.72C181.513 3.72 182.329 4.028 182.833 4.644C183.337 5.25067 183.589 6.15133 183.589 7.346C183.589 8.54067 183.319 9.47867 182.777 10.16C182.245 10.8413 181.433 11.182 180.341 11.182C179.249 11.182 178.428 10.8647 177.877 10.23C177.336 9.59533 177.065 8.68533 177.065 7.5ZM190.367 3.72C191.263 3.72 191.911 3.944 192.313 4.392C192.714 4.83067 192.915 5.50267 192.915 6.408C192.915 6.66933 192.877 7.88267 192.803 10.048L193.979 10.16C193.979 10.4213 193.899 10.7013 193.741 11H190.521L190.479 10.51C190.908 10.3607 191.328 10.2487 191.739 10.174C191.683 7.72867 191.631 6.37067 191.585 6.1C191.547 5.82 191.482 5.57733 191.389 5.372C191.295 5.16667 191.155 5.022 190.969 4.938C190.782 4.854 190.535 4.812 190.227 4.812C189.611 4.812 189.013 4.96133 188.435 5.26C188.379 7.388 188.341 8.984 188.323 10.048L189.499 10.16C189.499 10.4213 189.419 10.7013 189.261 11H186.041L185.999 10.51C186.428 10.3607 186.848 10.2487 187.259 10.174C187.203 7.80333 187.156 6.04867 187.119 4.91C186.605 4.882 186.195 4.826 185.887 4.742L185.943 4.014C186.447 3.874 187.179 3.804 188.141 3.804C188.253 3.972 188.337 4.21467 188.393 4.532C188.794 4.31733 189.195 4.13067 189.597 3.972C190.007 3.804 190.264 3.72 190.367 3.72ZM199.357 11.168C198.237 11.168 197.402 10.8553 196.851 10.23C196.301 9.59533 196.025 8.69467 196.025 7.528C196.025 4.98933 197.155 3.72 199.413 3.72C199.777 3.72 200.155 3.776 200.547 3.888C200.939 3.99067 201.247 4.10733 201.471 4.238C201.443 5.106 201.355 5.722 201.205 6.086C201.037 6.13267 200.902 6.156 200.799 6.156H200.561C200.515 6.156 200.459 6.15133 200.393 6.142L200.043 4.602C199.735 4.574 199.558 4.56 199.511 4.56C198.839 4.56 198.303 4.76533 197.901 5.176C197.509 5.58667 197.313 6.27733 197.313 7.248C197.313 8.21867 197.463 8.956 197.761 9.46C198.069 9.964 198.657 10.216 199.525 10.216C199.936 10.216 200.58 10.02 201.457 9.628C201.635 9.87067 201.728 10.0853 201.737 10.272C201.261 10.552 200.795 10.7713 200.337 10.93C199.88 11.0887 199.553 11.168 199.357 11.168ZM207.585 10.216C207.996 10.216 208.64 10.02 209.517 9.628C209.694 9.87067 209.788 10.0853 209.797 10.272C209.321 10.552 208.854 10.7713 208.397 10.93C207.94 11.0887 207.613 11.168 207.417 11.168C206.334 11.168 205.508 10.846 204.939 10.202C204.37 9.54867 204.085 8.63867 204.085 7.472C204.085 6.30533 204.36 5.39067 204.911 4.728C205.471 4.056 206.306 3.72 207.417 3.72C208.276 3.72 208.929 4.028 209.377 4.644C209.834 5.26 210.063 6.086 210.063 7.122C209.988 7.25267 209.928 7.34133 209.881 7.388L205.373 7.318C205.382 8.26067 205.546 8.97933 205.863 9.474C206.19 9.96867 206.764 10.216 207.585 10.216ZM208.789 6.52C208.789 5.904 208.677 5.428 208.453 5.092C208.229 4.74667 207.856 4.574 207.333 4.574C206.81 4.574 206.344 4.672 205.933 4.868C205.653 5.428 205.476 6.002 205.401 6.59C206.138 6.58067 207.268 6.55733 208.789 6.52Z"
        fill="white"
      />
    </svg>
  );
}

export function Envelope() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  );
}

export function MailIcon({ paramWidth, paramHeight }) {
  return (
    <svg
      width={`${paramWidth ? paramWidth : "58"}`}
      height={`${paramHeight ? paramHeight : "58"}`}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 1.54667L19.8892 7.25H12.0833V12.0833L7.17751 15.2008C5.77584 16.0467 4.83334 17.5692 4.83334 19.3333V43.5C4.83334 44.7819 5.34257 46.0113 6.24899 46.9177C7.15542 47.8241 8.3848 48.3333 9.66668 48.3333H48.3333C51.0158 48.3333 53.1667 46.1825 53.1667 43.5V19.3333C53.1667 17.5692 52.2242 16.0467 50.8225 15.2008L45.9167 12.0833V7.25H38.1108M16.9167 12.0833H41.0833V23.8767L29 31.4167L16.9167 23.8767M19.3333 14.5V18.125H38.6667V14.5M12.0833 17.835V20.8558L9.66668 19.3333M45.9167 17.835L48.3333 19.3333L45.9167 20.8558M19.3333 20.5417V24.1667H38.6667V20.5417H19.3333Z"
        fill="#FF9A62"
      />
    </svg>
  );
}

export function SearchIcon({ paramWidth, paramHeight }) {
  return (
    <svg
      width={`${paramWidth ? paramWidth : "41"}`}
      height={`${paramHeight ? paramHeight : "41"}`}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9467 2.32085e-07C18.9782 -0.000516809 21.947 0.862877 24.5054 2.48903C27.0638 4.11519 29.1058 6.43676 30.3922 9.18176C31.6786 11.9268 32.1561 14.9815 31.7687 17.9881C31.3813 20.9947 30.1452 23.8287 28.205 26.158L40.1733 38.1234C40.4302 38.3791 40.582 38.7218 40.5988 39.084C40.6155 39.4461 40.4961 39.8013 40.2639 40.0797C40.0317 40.3581 39.7037 40.5394 39.3445 40.5879C38.9852 40.6365 38.6209 40.5487 38.3231 40.3419L38.1201 40.1766L26.1547 28.2083C24.1862 29.8471 21.852 30.9876 19.3495 31.5335C16.8469 32.0794 14.2498 32.0146 11.7776 31.3446C9.3054 30.6746 7.03096 29.419 5.14661 27.6841C3.26226 25.9492 1.82344 23.786 0.951852 21.3775C0.0802613 18.969 -0.198464 16.386 0.13925 13.847C0.476964 11.308 1.42118 8.88767 2.89205 6.79073C4.36291 4.69379 6.31715 2.98191 8.58947 1.79991C10.8618 0.6179 13.3854 0.000524892 15.9467 2.32085e-07V2.32085e-07ZM15.9467 2.9C12.4857 2.9 9.16634 4.27491 6.71899 6.72226C4.27164 9.16961 2.89674 12.4889 2.89674 15.95C2.89674 19.4111 4.27164 22.7304 6.71899 25.1777C9.16634 27.6251 12.4857 29 15.9467 29C19.4078 29 22.7271 27.6251 25.1745 25.1777C27.6218 22.7304 28.9967 19.4111 28.9967 15.95C28.9967 12.4889 27.6218 9.16961 25.1745 6.72226C22.7271 4.27491 19.4078 2.9 15.9467 2.9Z"
        fill="#FF9A62"
      />
    </svg>
  );
}

export function SearchGrayIcon({ paramWidth, paramHeight }) {
  return (
    <svg
      width={`${paramWidth ? paramWidth : "41"}`}
      height={`${paramHeight ? paramHeight : "41"}`}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.7344 47.7356L41.0758 37.077C43.6419 33.6608 45.0272 29.5026 45.0225 25.23C45.0225 14.3165 36.1435 5.4375 25.23 5.4375C14.3165 5.4375 5.4375 14.3165 5.4375 25.23C5.4375 36.1435 14.3165 45.0225 25.23 45.0225C29.5026 45.0272 33.6608 43.6419 37.077 41.0758L47.7356 51.7344C48.2751 52.2167 48.9788 52.4742 49.7022 52.4539C50.4256 52.4337 51.1138 52.1373 51.6255 51.6255C52.1373 51.1138 52.4337 50.4256 52.4539 49.7022C52.4742 48.9788 52.2167 48.2751 51.7344 47.7356V47.7356ZM11.0925 25.23C11.0925 22.4339 11.9216 19.7005 13.4751 17.3756C15.0285 15.0507 17.2365 13.2387 19.8198 12.1687C22.4031 11.0986 25.2457 10.8186 27.9881 11.3641C30.7305 11.9096 33.2496 13.2561 35.2267 15.2333C37.2039 17.2104 38.5504 19.7295 39.0959 22.4719C39.6414 25.2143 39.3614 28.0569 38.2913 30.6402C37.2213 33.2235 35.4093 35.4315 33.0844 36.9849C30.7595 38.5383 28.0261 39.3675 25.23 39.3675C21.4819 39.363 17.8886 37.8721 15.2382 35.2218C12.5879 32.5714 11.097 28.9781 11.0925 25.23V25.23Z"
        fill="#666666"
      />
    </svg>
  );
}
