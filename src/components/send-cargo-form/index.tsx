import React, { FC, ReactElement, useState } from 'react';

import Form from '../form';
import Fieldset from '../fieldset';
import Field from '../field';
import Button from '../button';
import Switch from '../switch';
import Counter from '../counter';
import DropMenu from '../drop-menu';
import ButtonCreate from '../button-create';
import { ICargo, IRequest } from '../../utils/interfaces';
import styles from './index.module.scss';
import { useForm } from '../../hooks/useForm';
import Checkbox from '../checkbox';

interface ISendCargoForm {
  readonly cargos: IRequest;
  readonly setCargos: (cargos: IRequest) => void;
  readonly onCargoSubmit: () => void;
}

type TSwitch = {
  isActive: boolean;
  count: number;
};

type TController = Array<[TSwitch, TSwitch]>;

const SendCargoForm: FC<ISendCargoForm> = ({
  cargos,
  setCargos,
  onCargoSubmit,
}): ReactElement => {
  const [controllers, setControllers] = useState<TController>([
    [
      {
        isActive: false,
        count: 1,
      },
      {
        isActive: false,
        count: 1,
      },
    ],
  ]);

  const [transport, setTransport] = useState([
    {
      list: ['Любая газель 1', 'Любая газель 2', 'Любая газель 3'],
      activeIndex: 0,
    },
  ]);

  const [checkbox, setCheckbox] = useState(false);

  const handleSwitchChange =
    (controllerIndex: number, switchIndex: number) => (): void => {
      const newController = [...controllers];

      const { isActive } = newController[controllerIndex][switchIndex];
      newController[controllerIndex][switchIndex].isActive = !isActive;

      setControllers(newController);
    };

  const handleIncrement =
    (controllerIndex: number, switchIndex: number) => (): void => {
      const newController = [...controllers];

      const { count } = newController[controllerIndex][switchIndex];
      newController[controllerIndex][switchIndex].count = count + 1;

      setControllers(newController);
    };

  const handleDecrement =
    (controllerIndex: number, switchIndex: number) => (): void => {
      const newController = [...controllers];

      const { count } = newController[controllerIndex][switchIndex];
      newController[controllerIndex][switchIndex].count = count - 1;

      setControllers(newController);
    };

  const handleSelect = (controllerIndex: number) => (switchIndex: number) => {
    const newTransport = [...transport];
    newTransport[controllerIndex].activeIndex = switchIndex;
    setTransport(newTransport);
  };

  const handleDelete = (index: number) => () => {
    const newControllers = controllers.filter(
      (_, controllerIndex) => controllerIndex !== index
    );
    const newTransport = transport.filter(
      (_, controllerIndex) => controllerIndex !== index
    );

    setControllers(newControllers);
    setTransport(newTransport);
  };

  const handleAddTransport = () => {
    const newTransport = [...transport];
    const newControllers = [...controllers];
    newTransport.push({
      list: ['Любая газель 1', 'Любая газель 2', 'Любая газель 3'],
      activeIndex: 0,
    });
    newControllers.push([
      { isActive: false, count: 1 },
      { isActive: false, count: 1 },
    ]);

    setControllers(newControllers);
    setTransport(newTransport);
  };

  const handleSetData = () => {
    const newCargos = controllers.reduce((acc: ICargo[], cargo, index) => {
      const { list, activeIndex } = transport[index];

      const newCargo: ICargo = {
        transport: list[activeIndex],
        moversNumber: cargo[0].isActive ? cargo[0].count : 0,
        passengersNumber: cargo[1].isActive ? cargo[1].count : 0,
      };

      acc.push(newCargo);

      return acc;
    }, []);

    const newRequest = {
      cargos: newCargos,
      ...formData,
    };

    setCargos(newRequest);
    onCargoSubmit();
  };

  const { formData, handleChange, handleSubmit, handleReset } = useForm<{
    shippingAddress: string;
    date: string;
    destinationAddress: string;
    surname: string;
    name: string;
    tel: string;
    email: string;
  }>(
    {
      shippingAddress: '',
      date: '',
      destinationAddress: '',
      surname: '',
      name: '',
      tel: '',
      email: '',
    },
    handleSetData
  );

  const handleResetData = () => {
    setControllers([
      [
        {
          isActive: false,
          count: 1,
        },
        {
          isActive: false,
          count: 1,
        },
      ],
    ]);

    setTransport([
      {
        list: ['Любая газель 1', 'Любая газель 2', 'Любая газель 3'],
        activeIndex: 0,
      },
    ]);

    handleReset();
  };

  return (
    <Form name='sendCargo' onSubmit={handleSubmit}>
      <Fieldset className={styles.form__fieldset} title='Откуда' name='address'>
        <Field
          title='Адрес'
          name='shippingAddress'
          type='text'
          value={formData.shippingAddress}
          onChange={handleChange}
          placeholder='Введите адрес'
        />
        <Field
          title='Дата отправки'
          name='date'
          type='date'
          value={formData.date}
          onChange={handleChange}
        />
      </Fieldset>
      <Fieldset className={styles.form__fieldset} title='Куда' name=''>
        <Field
          title='Адрес'
          name='destinationAddress'
          type='text'
          value={formData.destinationAddress}
          onChange={handleChange}
          placeholder='Введите адрес'
        />
      </Fieldset>

      {
        <>
          {controllers.map((switchArray, controllerIndex) => {
            const [firstSwitch, secondSwitch] = switchArray;

            return (
              <Fieldset
                title={`Транспорт ${controllerIndex + 1}`}
                name='transport'
                withDelete={controllerIndex > 0}
                onDelete={handleDelete(controllerIndex)}
                key={controllerIndex}
              >
                <div className={styles.form__controllers}>
                  <>
                    <Switch
                      title='Грузчики'
                      name='switch'
                      onChange={handleSwitchChange(controllerIndex, 0)}
                      checked={firstSwitch.isActive}
                    />
                    {firstSwitch.isActive && (
                      <Counter
                        title='Кол-во грузчиков'
                        name='count'
                        value={firstSwitch.count}
                        onIncrement={handleIncrement(controllerIndex, 0)}
                        onDecrement={handleDecrement(controllerIndex, 0)}
                      />
                    )}
                    <Switch
                      title='Пассажиры'
                      name='switch'
                      onChange={handleSwitchChange(controllerIndex, 1)}
                      checked={secondSwitch.isActive}
                    />
                    {secondSwitch.isActive && (
                      <Counter
                        title='Кол-во пассажиров'
                        name='count'
                        value={secondSwitch.count}
                        onIncrement={handleIncrement(controllerIndex, 1)}
                        onDecrement={handleDecrement(controllerIndex, 1)}
                      />
                    )}
                  </>
                </div>
                <DropMenu
                  items={transport[controllerIndex].list}
                  activeIndex={transport[controllerIndex].activeIndex}
                  onItemClick={handleSelect(controllerIndex)}
                />
              </Fieldset>
            );
          })}
        </>
      }

      <ButtonCreate onClick={handleAddTransport}>
        Добавить еще транспорт
      </ButtonCreate>

      <Fieldset title='Контакты' name='contacts'>
        <Field
          title='Фамилия'
          name='surname'
          type='text'
          value={formData.surname}
          onChange={handleChange}
          placeholder='Укажите фамилию'
        />
        <Field
          title='Телефон'
          name='tel'
          type='tel'
          value={formData.tel}
          onChange={handleChange}
          placeholder='+7 (___) ___ - __ - __'
        />
        <Field
          title='Имя'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          placeholder='Укажите имя'
        />
        <Field
          title='E-mail'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Укажите почту'
        />
        <Checkbox
          className={styles.form__checkbox}
          checked={checkbox}
          onChange={() => setCheckbox(!checkbox)}
          signature='Соглашаюсь на обработку своих персональных данных'
        />
      </Fieldset>
      <Button type='submit' onClick={() => {}}>
        Отправить
      </Button>
      <Button
        className={styles.form__reset}
        color='white'
        type='reset'
        onClick={handleResetData}
      >
        Сбросить
      </Button>
    </Form>
  );
};

export default SendCargoForm;
