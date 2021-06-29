import { useEffect, useRef, useState } from 'react';
import {
  withPreferTheme,
  ThemeSchema,
} from '../../../../context/prefer-theme/withPreferTheme';
import JSONFormatter from 'json-formatter-js';

const JSON_VALUE = {
  CustomerCompany: [
    {
      id: '1',
      label: 'Blackwind Sai Gon',
      value: 1,
    },
    {
      id: '2',
      label: 'Công Ty Blackwind',
      value: 2,
    },
    {
      id: '3',
      label: 'kim kim',
      value: 3,
    },
    {
      id: '4',
      label: 'Công ty TNHH NHN',
      value: 4,
    },
    {
      id: '5',
      label: 'công ty cổ phần cơ khí vinh',
      value: 5,
    },
    {
      id: '6',
      label: 'công ty TNHH Hòa Phát',
      value: 6,
    },
    {
      id: '7',
      label: 'công ty TNHH Bắc Vinh',
      value: 7,
    },
    {
      id: '8',
      label: 'Công ty Thiết bị Sơn Kim',
      value: 8,
    },
    {
      id: '9',
      label: 'Công ty thiết bị MTV Nam Phong',
      value: 9,
    },
    {
      id: '10',
      label: 'Công ty TNHH Thái Hà',
      value: 10,
    },
    {
      id: '11',
      label: 'Công ty cổ phần Xây dựng Thăng Long',
      value: 11,
    },
    {
      id: '12',
      label: 'GGG',
      value: 12,
    },
  ],
  OptsCustomerType: [
    {
      label: 'Khách hàng nhà máy tôn',
      value: 32,
    },
    {
      label: 'Khách hàng công trình',
      value: 33,
    },
    {
      label: 'Khách lẻ',
      value: 34,
    },
    {
      label: 'Khách vật liệu xây dựng',
      value: 35,
    },
  ],
  address: 'a75 Bạch Đằng',
  attribute_description: '',
  attribute_values: '',
  attribute_values_id: '',
  birth_day: '01/05/2021',
  birthday: '',
  business_id: '',
  caring_user: 'NML10022',
  city_id: '',
  company_id: '1',
  country_id: 6,
  country_name: '',
  created_date: '',
  created_user: '0',
  created_user_full_name: '',
  customer_code: 'KML00018',
  customer_company: '1',
  customer_company_id: 0,
  customer_type: [
    {
      label: 'Khách hàng công trình',
      name: 'customer_type',
      value: 33,
    },
  ],
  customer_type_group_id: '',
  customer_type_group_name: '',
  customer_type_id: [
    {
      label: 'Khách hàng công trình',
      value: 33,
    },
  ],
  district_id: '',
  district_name: '',
  email: 'honhathoang1999@gmail.com',
  full_name: 'Hồ Sỹ Nhật Hoàng',
  gender: '0',
  id_card: '',
  id_card_date: '02/05/2021',
  id_card_place: '',
  image_avatar: '',
  is_active: 1,
  is_can_email: 0,
  is_can_sms_or_phone: 0,
  is_change_password: 1,
  is_confirm: 1,
  is_deleted: '',
  is_first_value: '',
  is_notification: 0,
  is_system: 0,
  listNewAttribute: [],
  marital_status: 0,
  member_id: '',
  order_index: '',
  password: '',
  password_confirm: '',
  phone_number: '0886617060',
  product_attribute_id: '',
  product_category_id: '',
  province_id: '',
  province_name: '',
  register_date: '',
  type: '',
  type_register: '',
  user_name: '',
  ward_id: '',
  ward_name: '',
};
type Props = {
  themeModeState: ThemeSchema;
};
function ResponseViewer({ themeModeState }: Props) {
  const [theme, setTheme] = useState(themeModeState.theme);

  const viewerRef = useRef(null);
  useEffect(() => {
    const unSub = themeModeState.subscribe((theme) => {
      setTheme(() => theme);
    });
    return unSub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const viewerNode = viewerRef.current;
    if (viewerNode && typeof window !== 'undefined') {
      const formatter = new JSONFormatter(JSON_VALUE, 1, { theme });
      (viewerNode as HTMLDivElement).innerHTML = '';
      (viewerNode as HTMLDivElement).appendChild(formatter.render());
    }
  }, [theme]);

  return (
    <div
      className='w-full overflow-auto bg-gray-100 dark:bg-gray-800 p-3'
      ref={viewerRef}
      style={{ height: 450 }}
    />
  );
}
export default withPreferTheme(ResponseViewer);
