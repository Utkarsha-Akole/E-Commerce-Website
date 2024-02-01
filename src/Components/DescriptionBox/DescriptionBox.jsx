import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>

            </div>
            <div className="descriptionbox-description">
                <p>E-commerce typically uses the web for at least a part of a transaction's life cycle although
                    it may also use other technologies such as e-mail. Typical e-commerce transactions include
                    the purchase of products (such as books from Amazon) or services (such as music downloads
                    in the form of digital distribution such as the iTunes Store).There are three areas
                    of e-commerce: online retailing, electronic markets, and online auctions. E-commerce is
                    supported by electronic business.The existence value of e-commerce is to allow consumers
                    to shop online and pay online through the Internet, saving the time and space of customers and 
                    enterprises, greatly improving transaction efficiency, especially for busy office workers, and 
                    also saving a lot of valuable time.</p>
                    <p>
                    A website that allows people to buy and sell physical goods, services, and digital products 
                    over the internet rather than at a brick-and-mortar location. Through an e-commerce website, 
                    a business can process orders, accept payments, manage shipping and logistics, and provide 
                    customer service.
                    </p>
            </div>
        </div>
    )
}

export default DescriptionBox
