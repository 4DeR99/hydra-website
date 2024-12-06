import React, { useState } from 'react'

interface CardsCarouselProps {
  currentCardIndex: number
  handleNextClick: () => void
  handlePrevClick: () => void
}

interface HeadlessCardsCarouselProps {
  cardsCount: number
  children: React.FC<CardsCarouselProps>
}

export const HeadlessCardsCarousel = ({
  cardsCount,
  children,
}: HeadlessCardsCarouselProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const handleNextClick = () => {
    if (currentCardIndex === cardsCount - 1) return
    setCurrentCardIndex((prev) => prev + 1)
  }

  const handlePrevClick = () => {
    if (currentCardIndex === 0) return
    setCurrentCardIndex((prev) => prev - 1)
  }

  return children({ currentCardIndex, handleNextClick, handlePrevClick })
}
