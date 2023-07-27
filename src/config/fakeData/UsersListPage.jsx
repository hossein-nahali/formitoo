import {useState} from "react";
import {Option} from "../../GlobalComponents/Option/index.jsx";

export const UsersListPage = () => {
    const [testListPage, setTestListPage] = useState({
        customize: {
            check_box: true
        },
        header: [
            {name: 'نام آزمون', position: 'start', id: 1235},
            {name: 'زمان ایجاد', position: 'start', id: 541},
            {name: 'شرکت کنندگان', position: 'centered', id: 241524},
            {name: 'مدیریت', position: 'centered', id: 24154},
        ],
        body: [
            {
                content: [
                    {name: '1. تیپ شخصیتی', position: 'start'},
                    {name: '1402/12/08 - 14:56', position: 'start'},
                    {name: '27', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},

                ],
                checked: false,
                id: 1234,
            },
            {
                content: [
                    {name: '2. اخلال شخصیت', position: 'start'},
                    {name: '1402/10/08 - 16:30', position: 'start'},
                    {name: '100', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 45245,
            },
            {
                content: [
                    {name: '3. پیشرفت', position: 'start'},
                    {name: '1402/09/10 - 10:15', position: 'start'},
                    {name: '20', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 54654,
            },
            {
                content: [
                    {name: '4. نگرش', position: 'start'},
                    {name: '1402/07/21 - 11:10', position: 'start'},
                    {name: '200', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 574574,
            },
            {
                content: [
                    {name: '5. استعداد', position: 'start'},
                    {name: '1402/10/12 - 20:30', position: 'start'},
                    {name: '150', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 25454,
            },
            {
                content: [
                    {name: '6. هیجانی', position: 'start'},
                    {name: '1402/10/07 - 18:14', position: 'start'},
                    {name: '3', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 25554,
            },
            {
                content: [
                    {name: '7. عصب روانشناسی', position: 'start'},
                    {name: '1403/04/07 - 15:12', position: 'start'},
                    {name: '400', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 65554,
            },

            {
                content: [
                    {name: '8. فرافکنی', position: 'start'},
                    {name: '1403/06/15 - 13:12', position: 'start'},
                    {name: '123', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 65634,
            },
            {
                content: [
                    {name: '9. MMPI فرم بلند ', position: 'start'},
                    {name: '1403/06/15 - 13:12', position: 'start'},
                    {name: '123', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 656984,
            },
            {
                content: [
                    {name: 'سازگاری بل .11', position: 'start'},
                    {name: '1403/05/26 - 09:26', position: 'start'},
                    {name: '256', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 65384,
            },
            {
                content: [
                    {name: 'اضطراب گود .12', position: 'start'},
                    {name: '1403/02/14 - 08:11', position: 'start'},
                    {name: '500', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 65364,
            },
            {
                content: [
                    {name: 'مقیاس عشق مثلثی استرنبرگ .13', position: 'start'},
                    {name: '1403/02/27 - 16:23', position: 'start'},
                    {name: '124', position: 'centered'},
                    {name: <Option icons={[{type: 'eye'}, {type: 'edit'}, {type: 'trash'}]}/>, position: 'centered'},
                ],
                checked: false,
                id: 621454,
            },

        ]
    })

    return [testListPage, setTestListPage]
}