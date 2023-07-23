export default function Matariki() {
    const getRandomDelay = () => Math.random() * 10 // Generate a random delay value between 0 and 5

    return (
        <>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="250px"
                height="166px"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
            >
                {/* if time add glow effect with defs here */}
                <g>
                    <path
                        className="star matariki"
                        fill="#F8F9FA"
                        d="M147, 147 c-25.5, 0-25.787, 26.359-25.787, 26.359 C121.213, 150.438, 96, 147, 96, 147 c25.787, 0, 25.213-26.359, 25.213-26.359 C121.213, 147, 147, 147, 147, 147z"
                        transform="translate(-90, -220) scale(3, 3)" 
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                        />
                    <path
                        className="star tupuānuku"
                        fill="#F8F9FA"
                        d="M147,147c-25.5,0-25.787,26.359-25.787,26.359C121.213,150.438,96,147,96,147
      c25.787,0,25.213-26.359,25.213-26.359C121.213,147,147,147,147,147z"
                        transform="translate(340, 55) scale(1.25, 1.25)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star tupuārangi"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(354, 54) scale(1.25, 1.25)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star ururangi"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-80, -40) scale(1.25, 1.25)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star waipuna-ā-rangi"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-278, 16) scale(1.5, 1.5)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star hiwa-i-te-rangi"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-202, 198) scale(1, 1)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star waitī"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-100, 232) scale(1, 1)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star waitā"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-128, 316) scale(0.75, 0.75)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                    <path
                        className="star pōhutukawa"
                        fill="#F8F9FA"
                        d="M189.413,84c-36.913,0-37.328,38.157-37.328,38.157c0-33.181-36.498-38.157-36.498-38.157
      c37.328,0,36.498-38.157,36.498-38.157C152.085,84,189.413,84,189.413,84z"
                        transform="translate(-38, 384) scale(0.75, 0.75)"
                        style={{ animationDelay: `${getRandomDelay()}s` }}
                    />
                </g>
            </svg>
        </>
    )
}
