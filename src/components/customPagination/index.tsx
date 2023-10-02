/* eslint-disable prettier/prettier */
import React from 'react';
import Pagination from '@mui/material/Pagination';

interface CustomPaginationProps {
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
    totalPages,
    currentPage,
    onChange,
}) => {
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page);
    };

    return (
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
        />
    );
};

export default CustomPagination;
