export type create_dto = {
  first_name: string;
  last_name: string;
  course_id: string;
  student_class_number: number;
};

export type list_paginated_options = {
  skip?: number,
  limit?: number
}