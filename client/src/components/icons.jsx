import React from 'react'

function DeleteButton({onClick}) {
    return (
        <div className="self-center items-center transform transition duration-500 hover:scale-110 cursor-pointer" onClick={onClick}>
            <svg className="fill-red-400  h-5 hover:fill-red-500" version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                    <path d="M1105 2871 c-93 -23 -105 -50 -105 -231 l0 -140 -260 0 c-288 0 -316
-5 -344 -59 -34 -65 -12 -146 48 -175 31 -14 131 -16 1056 -16 925 0 1025 2
1056 16 60 29 82 110 48 175 -28 54 -56 59 -344 59 l-260 0 0 135 c0 156 -11
194 -62 222 -30 16 -67 18 -418 20 -212 1 -398 -2 -415 -6z m645 -311 l0 -60
-250 0 -250 0 0 60 0 60 250 0 250 0 0 -60z"/>
                    <path d="M554 2101 c-17 -11 -36 -34 -43 -52 -8 -23 -11 -245 -11 -763 0 -616
2 -741 15 -789 43 -164 160 -290 325 -349 l65 -23 595 0 595 0 65 23 c165 59
282 185 325 349 22 83 22 1506 1 1558 -17 40 -61 65 -113 65 -47 -1 -78 -18
-104 -56 -18 -28 -19 -54 -19 -754 0 -455 -4 -738 -10 -761 -15 -52 -49 -99
-99 -134 l-43 -30 -598 0 -598 0 -43 30 c-50 35 -84 82 -99 134 -6 23 -10 304
-10 754 0 791 2 770 -61 802 -39 21 -98 19 -135 -4z"/>
                    <path d="M1165 1837 c-26 -26 -34 -44 -40 -88 -3 -29 -5 -245 -3 -479 3 -473
3 -471 72 -504 43 -20 69 -20 112 0 69 33 69 31 72 504 2 234 0 450 -3 479 -6
44 -14 62 -40 88 -29 29 -39 33 -85 33 -46 0 -56 -4 -85 -33z"/>
                    <path d="M1665 1837 c-26 -26 -34 -44 -40 -88 -3 -29 -5 -245 -3 -479 3 -473
3 -471 72 -504 43 -20 69 -20 112 0 69 33 69 31 72 504 2 234 0 450 -3 479 -6
44 -14 62 -40 88 -29 29 -39 33 -85 33 -46 0 -56 -4 -85 -33z"/>
                </g>
            </svg>
        </div>
    )
}

function EditButton({onClick}) {
    return (
        <div className="self-center items-center transform transition duration-500 hover:scale-110 cursor-pointer" onClick={onClick}>
            <svg className="fill-green-500 h-5 hover:fill-green-600" version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                    <path d="M2503 2980 c-81 -27 -125 -61 -252 -200 -92 -100 -484 -529 -1096
-1200 l-170 -186 -88 -269 c-75 -226 -88 -274 -83 -310 8 -47 52 -107 99 -131
64 -34 106 -24 357 86 129 56 247 109 261 118 14 10 102 100 194 202 93 102
219 239 279 305 404 438 905 993 929 1028 42 62 60 137 54 226 -6 98 -32 157
-102 230 -103 108 -245 146 -382 101z m186 -266 c33 -28 52 -77 44 -118 -4
-17 -89 -118 -231 -274 -124 -136 -295 -323 -380 -417 -86 -93 -245 -268 -355
-388 l-199 -218 -81 77 c-45 42 -83 80 -85 83 -1 4 150 173 335 377 186 204
438 480 560 615 123 134 237 254 254 267 44 31 99 29 138 -4z m-1299 -1604 c0
-6 -249 -120 -263 -120 -6 0 76 250 88 270 6 10 175 -134 175 -150z"/>
                    <path d="M442 2700 c-204 -54 -368 -222 -417 -426 -22 -90 -21 -1731 0 -1822
51 -214 213 -376 431 -432 74 -19 113 -20 919 -20 806 0 845 1 919 20 109 27
190 74 272 155 81 80 145 196 163 299 7 38 11 275 11 650 0 569 -1 592 -20
623 -58 96 -200 73 -230 -36 -6 -22 -10 -264 -10 -613 0 -566 0 -578 -21 -635
-26 -68 -92 -138 -164 -173 l-50 -25 -857 -3 c-843 -2 -857 -2 -911 18 -77 29
-140 87 -179 168 l-33 67 -3 800 c-2 493 1 824 7 863 18 118 87 209 195 259
l61 28 615 3 c413 2 624 6 642 13 74 29 89 142 29 203 l-31 31 -633 2 c-596 2
-636 1 -705 -17z"/>
                </g>
            </svg>
        </div>
    )
}


export { DeleteButton, EditButton }