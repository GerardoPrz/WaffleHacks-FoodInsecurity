import { useState } from "react"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return {
    isOpen,
    closeModal,
    openModal,
  }
}
