import "./ProgressCircle.scss"

type Props = {
  className?: string
  maxProgress?: number
  progress?: number
  deterministic?: boolean
}

export const ProgressCircle = ({ className, deterministic = false, maxProgress = 100, progress = 0 }: Props) => {
	return (
		<div className={`progress-circle ${className || ""}`} style={{background: `
      radial-gradient(closest-side, white 69%, transparent 70% 100%),
      conic-gradient(rgb(var(--color-accent)) ${deterministic ? progress / maxProgress * 100 : 25}%, rgb(var(--color-neutural-darker)) 0)
    `}}></div>
	)
}