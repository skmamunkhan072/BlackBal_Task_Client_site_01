import { Avatar, Table } from "flowbite-react";
import React from "react";

const MyTask = () => {
  return (
    <div className="py-10 min-h-[92.5vh]">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell className="whitespace-nowrap">
            Task Photo
          </Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">
            Date & Time
          </Table.HeadCell>
          <Table.HeadCell className="whitespace-nowrap">
            Task Discretion Details
          </Table.HeadCell>

          <Table.HeadCell>
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="justify-start items-center">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                bordered={true}
                color="gray"
              />
            </Table.Cell>
            <Table.Cell>
              <p className="whitespace-nowrap">12-28-2022</p>
              <p>4:00pm</p>
            </Table.Cell>
            <Table.Cell>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti quo veniam delectus, accusantium porro minima sunt
                nemo? Commodi, aperiam? Non quo debitis culpa nesciunt modi
                molestias eveniet fuga repellat dolores. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deleniti quo veniam delectus,
                accusantium porro minima sunt nemo? Commodi, aperiam? Non quo
                debitis culpa nesciunt modi molestias eveniet fuga repellat
                dolores.
              </p>
            </Table.Cell>
            <Table.Cell className="flex justify-start items-center">
              <h1>Edit</h1>
              <h1 className="ml-3">Delete</h1>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="justify-start items-center">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                bordered={true}
                color="gray"
              />
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyTask;
