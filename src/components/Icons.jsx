const DEFAULT_ICON_SIZE = 32

const getIconSize = (size) => {
  return size ?? DEFAULT_ICON_SIZE
}

const getIconSizeProps = (size) => {
  const iconSize = getIconSize(size)
  return {
    width: iconSize,
    height: iconSize,
  }
}

export function HomeIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <mask
        {...getIconSizeProps(size)}
        id="a"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M7.5 23.75h3.75v-7.5h7.5v7.5h3.75V12.5L15 6.875 7.5 12.5v11.25ZM5 26.25v-15l10-7.5 10 7.5v15h-8.75v-7.5h-2.5v7.5H5Z"
        />
      </g>
    </svg>
  )
}

export function MenuIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <mask
        {...getIconSizeProps(size)}
        id="a"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
      >
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M10 11.25c.354 0 .651-.12.89-.36.24-.239.36-.536.36-.89s-.12-.651-.36-.89a1.21 1.21 0 0 0-.89-.36c-.354 0-.651.12-.89.36-.24.239-.36.536-.36.89s.12.651.36.89c.239.24.536.36.89.36Zm0 5c.354 0 .651-.12.89-.36.24-.239.36-.536.36-.89s-.12-.651-.36-.89a1.21 1.21 0 0 0-.89-.36c-.354 0-.651.12-.89.36-.24.239-.36.536-.36.89s.12.651.36.89c.239.24.536.36.89.36Zm0 5c.354 0 .651-.12.89-.36.24-.239.36-.536.36-.89s-.12-.651-.36-.89a1.21 1.21 0 0 0-.89-.36c-.354 0-.651.12-.89.36-.24.239-.36.536-.36.89s.12.651.36.89c.239.24.536.36.89.36Zm-3.75 5a2.407 2.407 0 0 1-1.766-.734 2.407 2.407 0 0 1-.734-1.766V6.25c0-.688.245-1.276.734-1.766A2.407 2.407 0 0 1 6.25 3.75H20L26.25 10v13.75c0 .688-.245 1.276-.734 1.766-.49.49-1.078.734-1.766.734H6.25Zm0-2.5h17.5v-12.5h-5v-5H6.25v17.5Z"
        />
      </g>
    </svg>
  )
}

export function CafeteriaIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <mask
        {...getIconSizeProps(size)}
        id="a"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="currentColor" d="M0 0h30v30H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M5 26.25v-2.5h20v2.5H5Zm5-5c-1.375 0-2.552-.49-3.531-1.469C5.489 18.802 5 17.625 5 16.25V3.75h20c.688 0 1.276.245 1.766.734.49.49.734 1.079.734 1.766V10c0 .688-.245 1.276-.734 1.766-.49.49-1.078.734-1.766.734h-2.5v3.75c0 1.375-.49 2.552-1.469 3.531-.979.98-2.156 1.469-3.531 1.469H10Zm0-2.5h7.5c.688 0 1.276-.245 1.766-.734.49-.49.734-1.078.734-1.766v-10H7.5v10c0 .688.245 1.276.734 1.766.49.49 1.079.734 1.766.734ZM22.5 10H25V6.25h-2.5V10Z"
        />
      </g>
    </svg>
  )
}

export function EducationIcon({ size }) {
  return (
    <svg
      {...getIconSizeProps(size)}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        {...getIconSizeProps(size)}
        id="mask0_20_292"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
      >
        <rect {...getIconSizeProps(size)} fill="currentColor" />
      </mask>
      <g mask="url(#mask0_20_292)">
        <path
          d="M22.4375 20.2188L18.875 16.6875L20.6562 14.9375L22.4375 16.6875L26.8438 12.2812L28.625 14.0312L22.4375 20.2188ZM13.75 26.25L9.78125 22.6875C8.28125 21.3333 6.99479 20.125 5.92188 19.0625C4.84896 18 3.96354 17 3.26562 16.0625C2.56771 15.125 2.05729 14.2188 1.73438 13.3438C1.41146 12.4688 1.25 11.5521 1.25 10.5938C1.25 8.63542 1.90625 7.00521 3.21875 5.70312C4.53125 4.40104 6.16667 3.75 8.125 3.75C9.20833 3.75 10.2396 3.97917 11.2188 4.4375C12.1979 4.89583 13.0417 5.54167 13.75 6.375C14.4583 5.54167 15.3021 4.89583 16.2813 4.4375C17.2604 3.97917 18.2917 3.75 19.375 3.75C21.0625 3.75 22.4792 4.22396 23.625 5.17188C24.7708 6.11979 25.5521 7.3125 25.9688 8.75H23.3125C22.9375 7.91667 22.3854 7.29167 21.6562 6.875C20.9271 6.45833 20.1667 6.25 19.375 6.25C18.3125 6.25 17.3958 6.53646 16.625 7.10938C15.8542 7.68229 15.1354 8.4375 14.4688 9.375H13.0312C12.3854 8.4375 11.651 7.68229 10.8281 7.10938C10.0052 6.53646 9.10417 6.25 8.125 6.25C6.9375 6.25 5.91146 6.66146 5.04688 7.48438C4.18229 8.30729 3.75 9.34375 3.75 10.5938C3.75 11.2812 3.89583 11.9792 4.1875 12.6875C4.47917 13.3958 5 14.2135 5.75 15.1406C6.5 16.0677 7.52083 17.151 8.8125 18.3906C10.1042 19.6302 11.75 21.125 13.75 22.875C14.2917 22.3958 14.9271 21.8438 15.6563 21.2188C16.3854 20.5938 16.9688 20.0729 17.4062 19.6562L19.1875 21.4375C18.7292 21.8542 18.1458 22.3698 17.4375 22.9844C16.7292 23.599 16.1042 24.1458 15.5625 24.625L13.75 26.25Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export function FoodGeneratorIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none">
      <mask
        id="a"
        {...getIconSizeProps(size)}
        x="12"
        y="12"
        maskUnits="userSpaceOnUse"
      >
        <path fill="currentColor" d="M12.541 12.591h25.082v25.182H12.541z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="m17.113 34.625-1.463-1.47 10.713-10.754c-.314-.734-.357-1.565-.131-2.492.226-.927.723-1.757 1.49-2.492.922-.927 1.95-1.469 3.082-1.626 1.132-.157 2.055.122 2.77.84.714.716.992 1.643.836 2.78-.157 1.136-.697 2.168-1.62 3.095-.732.77-1.56 1.268-2.482 1.495-.923.228-1.75.184-2.482-.13l-1.307 1.31 7.943 7.975-1.463 1.469-7.943-7.922-7.943 7.922Zm3.084-8.971-3.136-3.148c-.94-.944-1.41-2.072-1.41-3.384 0-1.311.47-2.44 1.41-3.383l6.48 6.557-3.344 3.358Z"
        />
      </g>
      <path
        fill="currentColor"
        d="M26.336 44.068c2.425 0 4.703-.462 6.835-1.385 2.132-.923 3.992-2.182 5.581-3.777 1.588-1.595 2.843-3.463 3.762-5.603.92-2.14 1.38-4.428 1.38-6.862h2.508c0 2.77-.528 5.377-1.583 7.822-1.056 2.445-2.493 4.58-4.311 6.406-1.819 1.825-3.946 3.268-6.38 4.328-2.436 1.06-5.033 1.59-7.792 1.59v-2.519ZM6.27 26.44c0 2.435.46 4.722 1.38 6.863.92 2.14 2.174 4.008 3.762 5.603 1.589 1.595 3.45 2.854 5.581 3.777 2.132.923 4.41 1.385 6.835 1.385v2.518c-2.759 0-5.356-.53-7.791-1.59-2.435-1.06-4.562-2.502-6.38-4.328-1.819-1.825-3.256-3.96-4.311-6.405-1.056-2.445-1.584-5.052-1.584-7.822h2.509ZM23.828 6.295c-2.424 0-4.703.462-6.835 1.385-2.132.924-3.992 2.183-5.58 3.778C9.823 13.053 8.57 14.92 7.65 17.06c-.92 2.14-1.38 4.427-1.38 6.862H3.763c0-2.77.528-5.378 1.584-7.822 1.055-2.445 2.492-4.58 4.31-6.406 1.82-1.826 3.946-3.268 6.381-4.328 2.435-1.06 5.032-1.59 7.791-1.59v2.518ZM43.894 23.923c0-2.435-.46-4.722-1.38-6.862-.92-2.14-2.174-4.008-3.762-5.603-1.589-1.595-3.449-2.854-5.58-3.778-2.133-.923-4.411-1.385-6.836-1.385V3.777c2.76 0 5.356.53 7.791 1.59 2.435 1.06 4.562 2.502 6.38 4.328 1.82 1.826 3.256 3.96 4.312 6.405 1.055 2.445 1.583 5.053 1.583 7.823h-2.508Z"
      />
      <path
        fill="currentColor"
        d="M49.46 21.237c.273.329.25.81-.052 1.112l-2.944 2.93a2 2 0 0 1-2.948-.14l-2.657-3.194a.824.824 0 1 1 1.267-1.054l1.505 1.808a2 2 0 0 0 2.947.14l1.667-1.66a.824.824 0 0 1 1.215.058ZM29.763 49.491a.836.836 0 0 1-1.115-.016l-3.108-2.863a2 2 0 0 1 .043-2.98l3.188-2.773a.836.836 0 0 1 1.097 1.261l-1.78 1.548a2 2 0 0 0-.042 2.98l1.734 1.598a.836.836 0 0 1-.017 1.245ZM.869 30.272a.824.824 0 0 1-.07-1.111l2.608-3.235a2 2 0 0 1 2.945-.185l2.99 2.882a.824.824 0 0 1-1.145 1.188l-1.693-1.633a2 2 0 0 0-2.945.186l-1.476 1.831a.824.824 0 0 1-1.214.077ZM20.754.873a.825.825 0 0 1 1.116-.07l3.228 2.627a2 2 0 0 1 .18 2.935l-2.88 3.006a.825.825 0 1 1-1.19-1.14l1.642-1.715a2 2 0 0 0-.18-2.935l-1.842-1.498a.825.825 0 0 1-.074-1.21Z"
      />
    </svg>
  )
}