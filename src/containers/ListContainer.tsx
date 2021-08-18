import React, {useEffect, useState, MouseEvent, useMemo} from 'react';
import {Collapsable, Button, Loader, Modal} from "../components";
import Api from '../api/api';
import {BookEntity} from "../types/book-entity";
import './style.css';

type Props = {
  filterValue: string;
}

export const ListContainer: React.FC<Props> = ({ filterValue }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<BookEntity[]>([]);
  const [modalContent, showModalContent] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    setLoading(true);
    Api.getAll().then(setData).then(() => setLoading(false));
  }, []);

  const handleBuy = async (e: MouseEvent<HTMLButtonElement>, isbn: string) => {
    e.stopPropagation();
    setLoading(true);
    const receipt = await Api.buyOne(isbn);
    setLoading(false);
    showModalContent(receipt);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return item.isbn.toLocaleLowerCase().indexOf(filterValue) > -1 ||
        item.author.toLocaleLowerCase().indexOf(filterValue) > -1
    })
  }, [filterValue, data]);

  const shouldRenderModal = Boolean(modalContent);

  return (
    <>
      {isLoading && <Loader />}
      {shouldRenderModal && (
        <Modal handleClose={() => showModalContent(null)}>
          <h2>Your order details:</h2>
          <pre style={{whiteSpace: 'break-spaces'}}>{JSON.stringify(modalContent, null, 2)}</pre>
        </Modal>
      )}
      {!isLoading && filteredData.length < 1 ? (
        <p>No data found</p>
      ) : (
        <Collapsable>
          {filteredData.map((item) => (
            <Collapsable.Panel
              key={item.id}
              header={
                <div className="row-header-wrapper">
                  <div className="row-header-inner">
                    <img src={item.cover} alt=""/>
                    <div>
                      <span className="row-title">{item.name}</span>
                      <span className="row-subtitle">Author: {item.author}</span>
                      <span className="row-subtitle">Genre: {item.genre}</span>
                      <span className="row-subtitle">Book ISBN: {item.isbn}</span>
                    </div>
                  </div>
                  <div>
                    <Button onClick={(e) =>
                      handleBuy(e, item.isbn)
                    }>Buy ${item.price}</Button>
                  </div>
                </div>
              }
            >
              <p>{item.description}</p>
            </Collapsable.Panel>
          ))}
        </Collapsable>
      )}
    </>
  );
}
