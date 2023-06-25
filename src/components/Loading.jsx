import Image from "next/image"
import { Title } from "./Title"

export const LoadingSpinner = ({ size }) => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="animate-spin fill-primary text-primary/60"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? 16}
        height={size ?? 16}
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

const NUMBER_OF_RECOMMENDATION_IMAGES = 3

export function LoadingScreen({ recommendation }) {
  // index random from 0 to 2
  const recommendationImageIndex = Math.floor(
    Math.random() * NUMBER_OF_RECOMMENDATION_IMAGES,
  )

  const { title, description } = recommendation ?? {}

  console.log({ recommendation, recommendationImageIndex })

  return (
    <div className="mx-auto max-w-sm fixed right-0 top-0 bottom-0 left-0 flex h-screen w-full items-center justify-center flex-col gap-20 z-[9999] bg-light p-6 overscroll-none">
      <Image
        src={`/recommendations/${recommendationImageIndex}.png`}
        width={200}
        height={300}
        alt="Recommendation image"
        className="w-full"
      />
      <div className="flex flex-col gap-5 justify-center items-center">
        <Title>{title}</Title>
        <p className="text-center text-dark">{description}</p>
        <LoadingSpinner size={60} />
      </div>
    </div>
  )
}
