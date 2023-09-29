import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {catalog} = useContext(Context)

    useEffect(() => {
        if (catalog.selectedCategory.id) {
            catalog.setTotalCount(catalog.goods.filter(item => item.categoryId === catalog.selectedCategory.id).length)
        } else {
            catalog.setTotalCount(catalog.goods.length)
        }

        catalog.setPageCount(Math.ceil(catalog.totalCount / catalog.limit))
        const pages = []
        for (let i = 0; i < catalog.pageCount; i++) {
            pages.push(i + 1)
        }
        catalog.setPages(pages)
    }, [catalog, catalog.selectedCategory])

    return (
        <Pagination className="mt-3">
            {catalog.pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={catalog.page === page}
                    onClick={() => catalog.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;