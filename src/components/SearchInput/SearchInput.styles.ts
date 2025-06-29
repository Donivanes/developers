import styled from "styled-components"

export const InputContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}25;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  pointer-events: none;
  transition: color 0.2s ease;

  ${Input}:focus + ${IconContainer} & {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const ClearIcon = styled.button`
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: 2px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.border};
  }
`
