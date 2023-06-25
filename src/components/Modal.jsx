import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Image from "next/image"
import { Subtitle, Title } from "./Title"
import { Section, SectionHeader } from "./Section"
import { FoodIconsList } from "./Food"
import { FOOD_TIMES, FOOD_TYPES } from "@/constants"
import { useQuery } from "react-query"
import { getRecommendations } from "@/pages/api/firebase"
import { LoadingScreen } from "./Loading"

export function ModalHeader({ children }) {
  return (
    <Dialog.Title
      as="h3"
      className="border-b-2 pb-3 text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
    >
      {children}
    </Dialog.Title>
  )
}

export function ModalBody({ children }) {
  return <div className="flex flex-col gap-4 py-2">{children}</div>
}

export function ModalFooter({ children }) {
  return <div className="mt-2">{children}</div>
}

export default function Modal({ isOpen, closeModal, children }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-light p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-2">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export function RecipeDetailsModal({ recipe, isOpen, closeModal, isLoading }) {
  const { data: recommendation } = useQuery({
    queryKey: ["recommendations"],
    queryFn: getRecommendations,
    select: (data) => {
      const randomIndex = Math.floor(Math.random() * data.length)
      return data[randomIndex]
    },
  })

  if (isLoading) {
    return <LoadingScreen recommendation={recommendation} />
  }

  const { type, name, ingredients, instructions, foodList, description } =
    recipe ?? {}

  const { title: foodTime } = FOOD_TIMES[type] ?? {}

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalHeader>
        <button
          onClick={closeModal}
          className="flex items-center justify-center text-dark"
        >
          <Image
            alt="Arrow back icon"
            src="/icons/arrow-back.svg"
            width={24}
            height={24}
          />
        </button>
        <Title>{foodTime}</Title>
        <button>
          <Image
            alt="Favorite icon"
            src="/icons/favorite.svg"
            width={24}
            height={24}
          />
        </button>
      </ModalHeader>
      <ModalBody>
        <SectionHeader>
          <Title>{name}</Title>
          <p>{description}</p>
        </SectionHeader>
        <Section>
          <Subtitle>Alimentos Seleccionados</Subtitle>
          <FoodIconsList foodList={foodList} />
        </Section>
        <Section>
          <Subtitle>Ingredientes</Subtitle>
          <ul className="list-disc list-inside">
            {ingredients?.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Section>
        <Section>
          <Subtitle>Instrucciones</Subtitle>
          <ol className="list-decimal list-inside">
            {instructions?.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </Section>
      </ModalBody>
    </Modal>
  )
}
export function ExampleModal({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalHeader>Payment successful</ModalHeader>
      <ModalBody>
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </p>
      </ModalBody>

      <ModalFooter>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  )
}
