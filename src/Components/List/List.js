import React from 'react'
import style from './list.module.css'
const List = () => {

    const item_list=[
        {
            id:"#2812098",
            status:"1",
            txn_id:"131634495747",
            refund_date:"Today, 08:45 PM",
            order_amt:"₹1,125.00"
        },
        {
            id:"#2812098",
            status:"0",
            txn_id:"131634495747",
            refund_date:"Yesterday, 03:00 PM",
            order_amt:"₹1,125.00"
        },
        {
            id:"#2812098",
            status:"1",
            txn_id:"131634495747",
            refund_date:"12 Jul 2023, 03:00 PM",
            order_amt:"₹1,125.00"
        },
        {
            id:"#2812098",
            status:"1",
            txn_id:"131634495747",
            refund_date:"12 Jul 2023, 03:00 PM",
            order_amt:"₹1,125.00"
        },
        {
            id:"#2812098",
            status:"1",
            txn_id:"131634495747",
            refund_date:"12 Jul 2023, 03:00 PM",
            order_amt:"₹1,125.00"
        },
        {
            id:"#2812098",
            status:"1",
            txn_id:"131634495747",
            refund_date:"12 Jul 2023, 03:00 PM",
            order_amt:"₹1,125.00"
        }
    ]

    return (item_list.map((item,index)=>(
        <div key={item.id+index} className={style.list_items}>
            <p className={style.list_id}>{item.id}</p>
            <p className={style.list_status}>{item.status==1?<span className={style.success}>Successful</span>:<span className={style.processing}>Processing</span>  }</p>
            <p className={style.list_txn_id}>{item.txn_id}</p>
            <p className={style.list_refund_date}>{item.refund_date}</p>
            <p className={style.list_order_amt}>{item.order_amt}</p>
        </div>

    ))


    )
}

export default List