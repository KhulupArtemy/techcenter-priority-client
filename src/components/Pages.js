import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {tractor} = useContext(Context)

    useEffect(() => {
        if (tractor.selectedModel.id) {
            tractor.setTotalCount(tractor.tractors.filter(item => item.modelId === tractor.selectedModel.id).length)
        } else {
            tractor.setTotalCount(tractor.tractors.length)
        }

        tractor.setPageCount(Math.ceil(tractor.totalCount / tractor.limit))
        const pages = []
        for (let i = 0; i < tractor.pageCount; i++) {
            pages.push(i + 1)
        }
        tractor.setPages(pages)
    }, [tractor, tractor.selectedModel])

    return (
        <Pagination className="mt-3">
            {tractor.pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={tractor.page === page}
                    onClick={() => tractor.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;