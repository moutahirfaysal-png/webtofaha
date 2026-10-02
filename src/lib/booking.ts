import type { Reservation } from './types';

export function buildWhatsAppMessage(data: {
  guestName: string;
  roomName?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  nights: number;
  estimatedTotal?: string;
  specialRequests?: string;
}): string {
  const lines = [
    'Hello Riad Tofaha,',
    '',
    'I would like to request a reservation.',
    '',
    `Full Name: ${data.guestName}`,
  ];

  if (data.roomName) {
    lines.push(`Room: ${data.roomName}`);
  }

  lines.push(
    `Check-in: ${data.checkIn}`,
    `Check-out: ${data.checkOut}`,
    `Adults: ${data.adults}`,
    `Children: ${data.children}`,
    `Number of Nights: ${data.nights}`,
  );

  if (data.estimatedTotal) {
    lines.push(`Estimated Total: ${data.estimatedTotal}`);
  }

  if (data.specialRequests) {
    lines.push(`Special Requests: ${data.specialRequests}`);
  }

  lines.push(
    '',
    'Could you please confirm availability and provide the next steps?',
    '',
    'Thank you.',
  );

  return lines.join('\n');
}

export function openWhatsApp(whatsappNumber: string, message: string): void {
  const cleaned = whatsappNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${cleaned}?text=${encoded}`;
  window.open(url, '_blank');
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
}

export function formatPrice(price: number | null | undefined, currency: string = 'EUR'): string {
  if (price === null || price === undefined) return '';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export async function saveReservation(reservation: Omit<Reservation, 'id' | 'created_at' | 'updated_at' | 'status'>): Promise<Reservation | null> {
  try {
    const { supabase } = await import('./supabase');
    const { data, error } = await supabase
      .from('reservations')
      .insert({
        ...reservation,
        status: 'pending',
      })
      .select()
      .single();
    if (error) {
      console.error('Error saving reservation:', error);
      return null;
    }
    return data as Reservation;
  } catch (err) {
    console.error('Error saving reservation:', err);
    return null;
  }
}
