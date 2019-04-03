using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LPRGI.ProgReseau.SignalRApp.Hubs
{
    public sealed class MessageHub : Hub
    {
        public async Task TransmettreMessages(string username, string message)
        {
            await Clients.All.SendAsync("RecevoirMessage", username, message);
        }
    }
}
