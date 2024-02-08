import { store } from "../../redux/store"
import Table from "../components/TableBooks/TableBooks"
import { Provider } from "react-redux"

export default {
    title: 'components/TableBooks',
  component: Table,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
}

const Template = () => <Table/>

export const Primary = Template.bind({})