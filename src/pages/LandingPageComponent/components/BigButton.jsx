
export default function BigButton({ variant, title }){
    let buttonClass = 'text-lg border-2 border-acc-blue rounded hover:text-blue-700 h-12 w-48';
    
    if (variant === 'secondary') {
        buttonClass += ' bg-white text-acc-blue';
    } else if (variant === 'primary') {
        buttonClass += ' bg-acc-blue text-white';
    }
    
    return (
        <button className={buttonClass}>
            {title}
        </button>
    );
}
