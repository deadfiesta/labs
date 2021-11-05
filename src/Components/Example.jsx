import React from 'react'
import Field from '@seaweb/coral/components/Field';
import DatePicker, { MonthPicker, YearPicker } from '@seaweb/coral/components/DatePicker';

const Example = () => {
    return (
        <form>
            <Field label="Date Picker">
                <DatePicker onChange={(date) => console.log(date.format('DD-MM-YYYY'))} />
            </Field>
            <Field label="Month Picker">
                <MonthPicker onChange={(date) => console.log(date.format('MM-YYYY'))} />
            </Field>
            <Field label="Year Picker">
                <YearPicker onChange={(date) => console.log(date.format('YYYY'))} />
            </Field>
            <Field label="Disabled">
                <DatePicker disabled />
            </Field>
        </form>
    )
}

export default Example
