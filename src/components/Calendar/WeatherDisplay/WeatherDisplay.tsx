import React, { FC } from 'react';
import { Moment } from 'moment';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../hooks';
import { WeatherDisplayWrapper, Wrapper, WeatherTemp } from './WeatherDisplay.styled';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import cn from 'classnames';

interface IWeatherDisplayProps {
  date: Moment;
  hasEvents: boolean;
}

const WeatherDisplay: FC<IWeatherDisplayProps> = observer(({ date, hasEvents }) => {
  const { weatherStore } = useStore();

  if (weatherStore.isLoading) {
    return <div />;
  }

  const weatherData = weatherStore.dates.find(({ dt: d }: { dt: Moment }) =>
    d.isSame(date, 'date')
  );

  return (
    <WeatherDisplayWrapper transitionDirection={hasEvents ? 'up' : 'down'}>
      <SwitchTransition>
        <CSSTransition key={hasEvents ? 'up' : 'down'} timeout={1000} classNames="move">
          <Wrapper className={cn({ moved: hasEvents })}>
            {weatherStore.isLoading ? (
              <div />
            ) : (
              <WeatherTemp>{`${Math.round(weatherData.feels_like.day)}\u00B0`}</WeatherTemp>
            )}
            {/* <WeatherIcon>{inputIcon(weatherData.weather[0].icon.slice(0, 2))}</WeatherIcon> */}
          </Wrapper>
        </CSSTransition>
      </SwitchTransition>
    </WeatherDisplayWrapper>
  );
});

export { WeatherDisplay };
