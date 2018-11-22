import React from 'react'
import TextInput from '../_common/TextInput'
import SelectInput from '../_common/SelectInput'

const CourseForm =({course,allAuthors,saving,onChange,onSave,error}) => {
    return( 
        <form>
            <TextInput
                    name="title"
                    label="Title"
                    value={course.title}
                    onChange={onChange}
                    error={error.title}/>

             <SelectInput
                    name="authors"
                    label="Authors"
                    value={course.authorId}
                    options={allAuthors}
                    defaultOption="Select author"
                    onChange={onChange}
                    error={error.authorId}/>
               <TextInput
                    name="category"
                    label="Category"
                    value={course.category}
                    onChange={onChange}
                    error={error.category}/>        
               <TextInput
                    name="length"
                    label="length"
                    value={course.length}
                    onChange={onChange}
                    error={error.length}/>        
            <input 
                type="submit" 
                disabled={saving}
                value={saving?"Saving...":"Save"} 
                className="btn  btn-primary"
                onClick={onSave}/>
        </form>
    )
}

export default CourseForm

