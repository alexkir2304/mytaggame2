'use client'
import './main.scss'
import {Container} from "postcss";
import {useState} from "react";
import Card from "@/app/mainBox/zones/page";
import dynamic from "next/dynamic";


export default function Mainbox() {
    // const Card = dynamic(() => import('./zones/page'), { ssr: false })

    //создаю главный массив, управаляющий дочерними компонентами

    const cardsCoordinates = [
        [' 0%', ' 0%', 'busy' ],
        [' 25%', ' 0%', 'busy' ],
        [' 50%', ' 0%', 'busy' ],
        [' 75%', ' 0%', 'busy' ],
        [' 0%', ' 25%', 'busy' ],
        [' 25%', ' 25%', 'busy' ],
        [' 50%', ' 25%', 'busy' ],
        [' 75%', ' 25%', 'busy' ],
        [' 0%', ' 50%', 'busy' ],
        [' 25%', ' 50%', 'busy' ],
        [' 50%', ' 50%', 'busy' ],
        [' 75%', ' 50%', 'busy' ],
        [' 0%', ' 75%', 'busy' ],
        [' 25%', ' 75%', 'busy' ],
        [' 50%', ' 75%', 'busy' ],
        [' 75%', ' 75%', 'busy' ],

    ]

    const randomItem = +(Math.random()*10).toFixed(0);
    cardsCoordinates[randomItem][2] = 'empty'


    const [mainArray, setMainArray] = useState(cardsCoordinates);

    //создаю массив с контентом карточек - пока что цифры, далее добавлю нарезанные картинки

    const contextArr = Array(16).fill(null)
    let i = 0
    const newContextArr = contextArr.map(function(item){
        {
            i++
            return (
                item + i
            )
        }
    })
    console.log(newContextArr)

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    //перемешиваю контент карточек
    shuffle(newContextArr);

    //перемещаем контент из карты 'empty'  в карту с наибольшим значением, наибольшее значение убираем
    const maxNumberIndex = newContextArr.findIndex(item => item === newContextArr.length)
    console.log('maxNumberIndex' + maxNumberIndex)
    newContextArr[maxNumberIndex] = newContextArr[randomItem]
    newContextArr[randomItem] = null


    const [cardsContextMain, setCardsContextMain] = useState(newContextArr);
    console.log(cardsContextMain)


    function handleClick(e) {
        const currentEmptyIndex = mainArray.findIndex(item => item[2] === 'empty');
        console.log('my current empty index is' + currentEmptyIndex)

        const clickedIndex = e.target.getAttribute('id');
        console.log('my clicked index is' + clickedIndex)

        // const maxOfClickedAndEmpty = Math.max(currentEmptyIndex, clickedIndex)
        // console.log('maxOfClickedAndEmpty' + maxOfClickedAndEmpty)

        const differenceOfIndexes = ()=> {
            if (currentEmptyIndex > clickedIndex) {
                return currentEmptyIndex - clickedIndex;
            } else {
                return clickedIndex - currentEmptyIndex ;
            }
        }

        console.log('differenceOfIndexes' + differenceOfIndexes())

        if ((e.target.getAttribute('status') !== 'empty') && ((differenceOfIndexes() === 1) || (differenceOfIndexes() === 4))) {
            const currentEmptyIndex = mainArray.findIndex(item => item[2] === 'empty');
            console.log('my current empty index is' + currentEmptyIndex)

            const clickedIndex = e.target.getAttribute('id');
            console.log('my clicked index is' + clickedIndex)

            console.log(e.target)

            const nextMainArr = mainArray.slice()
            nextMainArr[clickedIndex][2] = 'empty'
            nextMainArr[currentEmptyIndex][2] = 'busy'

            setMainArray(nextMainArr);

            const nextCardsContextMain = cardsContextMain.slice()
            nextCardsContextMain[currentEmptyIndex] = nextCardsContextMain[clickedIndex]
            nextCardsContextMain[clickedIndex] = null

            setCardsContextMain(nextCardsContextMain)
        }
    }

    const myNewCards = mainArray.map((item, index) => {

        if (mainArray[index][2] !== 'empty') {
            return (
                <>
                    <Card key={index} styleLeft = {item[0]} styleTop = {item[1]} value = {cardsContextMain[index]} id = {index} onClickFunc={handleClick} status = {item[2]}/>
                </>
            )
        }
        else {
            return (
                <>
                    <Card key={index} styleLeft = {item[0]} styleTop = {item[1]} value = {cardsContextMain[index]} id = {index} onClickFunc={handleClick} status = {item[2]}/>
                </>
            )
        }
    })




    return (
        <>
            <div className="mainBox">
                {myNewCards}

            </div>
        </>
    )
}

