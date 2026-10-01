import React, { useState, useEffect } from 'react'
import MealCard from '../components/MealCard';

function Meals() {
    const [keyword, setKeyword] = useState('');
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}db.json`)
            //fetch('/db.json')
            .then((reponse) => reponse.json())
            .then((data) => setMeals(data.meals || []))
            .catch((error) => console.log('식단 데이너 로드 실패', error))
    }, [])

    const filteredMeals = meals.filter((meal) => meal.title.includes(keyword))

    return (
        <div className="contents">
            <section>
                <h2>식단관리</h2>
                <p className="page-desc">
                    원하는 메뉴를 검색하고, 오늘의 건강한 한 끼를 찾아보세요.
                </p>
                <input
                    type="text"
                    className='search-input'
                    placeholder='예: 연어, 샐러드'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <p className="result-content">
                    검색결과 {filteredMeals.length}개
                </p>
                <div className="card-grid">
                    {
                        filteredMeals.map((item) => <MealCard key={item.id} item={item} />)
                    }
                </div>
            </section>
        </div>
    )
}

export default Meals